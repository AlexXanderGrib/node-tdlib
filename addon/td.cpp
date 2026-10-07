#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1

#include <napi.h>
#include <algorithm>
#include <atomic>
#include <cstdint>
#include <chrono>
#include <cmath>
#include <condition_variable>
#include <memory>
#include <mutex>
#include <string>
#include <thread>
#include <type_traits>
#include <unordered_set>

#include "tdlib_loader.h"
#include "td_dispatcher.h"

namespace {
class ReceiveWorker;
struct AddonState {
  std::unordered_set<ReceiveWorker*> workers;
  ReceiveWorker* modern_worker = nullptr;
};

// TDLib allows just one process-wide td_receive caller and log callback.
napi_env modern_owner = nullptr;

AddonState* State(Napi::Env env) { return env.GetInstanceData<AddonState>(); }

void RequireLoaded(Napi::Env env) {
  if (!TdLibLoader::IsTdLoaded()) {
    throw Napi::Error::New(env, "TDLib not loaded. Call load_tdjson() first.");
  }
}

double Timeout(const Napi::CallbackInfo& info) {
  auto env = info.Env();
  if (info.Length() < 1 || !info[0].IsNumber()) {
    throw Napi::TypeError::New(env, "Expected first argument (timeout) to be a number");
  }
  double timeout = info[0].As<Napi::Number>().DoubleValue();
  if (!std::isfinite(timeout) || timeout < 0 || timeout > 300) {
    throw Napi::RangeError::New(env, "Invalid timeout value (must be 0-300 seconds)");
  }
  return timeout;
}

int Integer(Napi::Env env, Napi::Value value, int min, int max, const char* name) {
  if (!value.IsNumber()) throw Napi::TypeError::New(env, name);
  double number = value.As<Napi::Number>().DoubleValue();
  if (!std::isfinite(number) || std::floor(number) != number || number < min || number > max) {
    throw Napi::RangeError::New(env, name);
  }
  return static_cast<int>(number);
}

std::string Request(const Napi::CallbackInfo& info, size_t index) {
  if (info.Length() <= index || !info[index].IsString()) {
    throw Napi::TypeError::New(info.Env(), "Expected request to be a string");
  }
  auto request = info[index].As<Napi::String>().Utf8Value();
  if (request.find('\0') != std::string::npos) {
    throw Napi::TypeError::New(info.Env(), "Request must not contain NUL characters");
  }
  return request;
}

Napi::Value Response(Napi::Env env, const char* response) {
  return response == nullptr ? env.Null() : Napi::String::New(env, response);
}

class ReceiveWorker {
 public:
  struct Deleter {
    void operator()(ReceiveWorker* worker) const {
      worker->Shutdown();
      worker->Release();
    }
  };
  using Owner = std::unique_ptr<ReceiveWorker, Deleter>;

  static Owner Create(Napi::Env env, void* client, double timeout) {
    ReceiveWorker* raw;
    try {
      raw = new ReceiveWorker(State(env), client, timeout);
    } catch (...) {
      if (client != nullptr) TdLibLoader::td_json_client_destroy.load()(client);
      throw;
    }
    Owner worker(raw);
    worker->state_->workers.insert(worker.get());
    worker->tsfn_ = Tsfn::New(env, "ReceiveTSFN", 1, 1, worker.get(),
      [](Napi::Env, void*, ReceiveWorker* ctx) {
        std::lock_guard<std::recursive_mutex> lock(TdLibLoader::Mutex());
        ctx->Release();
      });
    // Queued callbacks retain their context even after External finalization.
    worker->refs_.fetch_add(1);
    try {
      worker->thread_ = std::thread(&ReceiveWorker::Loop, worker.get());
    } catch (...) {
      worker->tsfn_.Release();
      throw;
    }
    return worker;
  }

  ~ReceiveWorker() {
    Shutdown();
    if (state_ != nullptr) state_->workers.erase(this);
  }

  void Release() {
    if (refs_.fetch_sub(1) == 1) delete this;
  }

  void Shutdown(napi_env env = nullptr) {
    if (destroyed_) return;
    destroyed_ = true;
    {
      std::lock_guard<std::mutex> lock(mutex_);
      stop_ = true;
    }
    cv_.notify_one();
    if (thread_.joinable()) thread_.join();
    // Never destroy a client while td_json_client_receive is using it.
    if (client_ != nullptr) {
      TdLibLoader::td_json_client_destroy.load()(client_);
      client_ = nullptr;
    }
    TdLibLoader::ReleaseResource();
    auto deferred = deferred_;
    deferred_ = nullptr;
    std::string().swap(response_);
    if (env != nullptr && deferred) {
      napi_reject_deferred(env, deferred,
        Napi::Error::New(env, "Client is destroyed").Value());
    }
  }

  Napi::Promise NewTask(Napi::Env env) {
    napi_deferred deferred;
    napi_value promise;
    if (napi_create_promise(env, &deferred, &promise) != napi_ok) {
      throw Napi::Error::New(env, "Failed to create receive promise");
    }
    if (destroyed_ || deferred_ != nullptr) {
      napi_reject_deferred(env, deferred, Napi::Error::New(env, destroyed_ ?
        "Client is destroyed" : "receive is not finished yet").Value());
      return Napi::Promise(env, promise);
    }
    deferred_ = deferred;
    {
      std::lock_guard<std::mutex> lock(mutex_);
      ready_ = true;
    }
    cv_.notify_one();
    return Napi::Promise(env, promise);
  }

  void* Client(Napi::Env env) const {
    if (destroyed_) throw Napi::Error::New(env, "Client is destroyed");
    return client_;
  }
  void Ref(Napi::Env env) { tsfn_.Ref(env); }
  void Unref(Napi::Env env) { tsfn_.Unref(env); }
  void DetachState() { state_ = nullptr; }

 private:
  ReceiveWorker(AddonState* state, void* client, double timeout)
    : state_(state), client_(client), timeout_(timeout) {
    TdLibLoader::RetainResource();
  }

  static void CallJs(Napi::Env env, Napi::Function, ReceiveWorker* ctx, void*) {
    if (env == nullptr || ctx->destroyed_ || ctx->deferred_ == nullptr) return;
    // Node can stop allowing JS during worker termination before env is null.
    // Use status-returning N-API here so teardown never throws across a C ABI.
    auto deferred = ctx->deferred_;
    ctx->deferred_ = nullptr;
    napi_value value;
    napi_status status = ctx->response_.empty() ? napi_get_null(env, &value) :
      napi_create_string_utf8(env, ctx->response_.data(), ctx->response_.size(), &value);
    ctx->ClearResponse();
    if (status == napi_ok && !ctx->receive_failed_) {
      napi_resolve_deferred(env, deferred, value);
    } else {
      napi_value message, error;
      if (napi_create_string_utf8(env, "Failed to receive TDLib response", NAPI_AUTO_LENGTH, &message) == napi_ok &&
          napi_create_error(env, nullptr, message, &error) == napi_ok) {
        napi_reject_deferred(env, deferred, error);
      }
    }
  }

  using Tsfn = Napi::TypedThreadSafeFunction<ReceiveWorker, void, CallJs>;

  void ClearResponse() {
    // Reuse small buffers, but do not retain large chat/file responses.
    if (response_.capacity() > 64 * 1024) std::string().swap(response_);
    else response_.clear();
  }

  void Loop() {
    std::unique_lock<std::mutex> lock(mutex_);
    while (!stop_) {
      cv_.wait(lock, [this] { return ready_ || stop_; });
      if (stop_) break;
      ready_ = false;
      lock.unlock();
      receive_failed_ = false;
      try {
        const auto deadline = std::chrono::steady_clock::now() +
          std::chrono::duration<double>(timeout_);
        do {
          // Short waits preserve the requested timeout and bound shutdown latency.
          const double remaining = std::chrono::duration<double>(
            deadline - std::chrono::steady_clock::now()).count();
          const double wait = std::max(0.0, std::min(remaining, 0.1));
          const char* response = client_ == nullptr ?
            TdLibLoader::td_receive.load()(wait) :
            TdLibLoader::td_json_client_receive.load()(client_, wait);
          if (response != nullptr) {
            response_.assign(response); // One copy; never truncate JSON.
            break;
          }
        } while (!stop_ && std::chrono::steady_clock::now() < deadline);
      } catch (...) {
        receive_failed_ = true;
      }
      lock.lock();
      if (stop_) break;
      // There is at most one outstanding receive, so a queue of one suffices.
      if (tsfn_.NonBlockingCall(nullptr) != napi_ok) break;
    }
    lock.unlock();
    tsfn_.Release();
  }

  AddonState* state_;
  void* client_;
  double timeout_;
  Tsfn tsfn_;
  napi_deferred deferred_ = nullptr;
  std::string response_;
  bool receive_failed_ = false;
  bool destroyed_ = false;
  bool ready_ = false;
  std::atomic<bool> stop_{false};
  std::atomic<unsigned> refs_{1};
  std::mutex mutex_;
  std::condition_variable cv_;
  std::thread thread_;
};

ReceiveWorker* ClientWorker(const Napi::CallbackInfo& info) {
  if (info.Length() < 1 || !info[0].IsExternal()) {
    throw Napi::TypeError::New(info.Env(), "Expected first argument to be a client external object");
  }
  auto* worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
  if (State(info.Env())->workers.count(worker) == 0 ||
      worker == State(info.Env())->modern_worker) {
    throw Napi::TypeError::New(info.Env(), "Unknown client");
  }
  return worker;
}

ReceiveWorker* ModernWorker(Napi::Env env) {
  auto* worker = State(env)->modern_worker;
  if (worker == nullptr) throw Napi::Error::New(env, "The worker is uninitialized");
  return worker;
}
} // namespace

namespace Tdo {
Napi::Value ClientCreate(const Napi::CallbackInfo& info) {
  auto env = info.Env();
  RequireLoaded(env);
  if (TdLibLoader::td_json_client_create.load() == nullptr) {
    throw Napi::Error::New(env, "The loaded TDLib does not support the legacy JSON API");
  }
  double timeout = Timeout(info);
  void* client = TdLibLoader::td_json_client_create.load()();
  if (client == nullptr) throw Napi::Error::New(env, "td_json_client_create returned null");
  // Transfer client ownership before anything that can fail during setup.
  auto worker = ReceiveWorker::Create(env, client, timeout);
  auto external = Napi::External<ReceiveWorker>::New(env, worker.get(),
    [](Napi::Env env, ReceiveWorker* worker) {
      std::lock_guard<std::recursive_mutex> lock(TdLibLoader::Mutex());
      worker->Shutdown(env);
      worker->Release();
    });
  worker.release();
  return external;
}
void ClientSend(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  auto* worker = ClientWorker(info);
  auto request = Request(info, 1);
  TdLibLoader::td_json_client_send.load()(worker->Client(info.Env()), request.c_str());
}
Napi::Value ClientReceive(const Napi::CallbackInfo& info) {
  return ClientWorker(info)->NewTask(info.Env());
}
Napi::Value ClientExecute(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  if (TdLibLoader::td_json_client_execute.load() == nullptr) {
    throw Napi::Error::New(info.Env(), "The loaded TDLib does not support the legacy JSON API");
  }
  auto request = Request(info, 1);
  void* client = nullptr;
  if (!info[0].IsNull() && !info[0].IsUndefined()) {
    client = ClientWorker(info)->Client(info.Env());
  }
  return Response(info.Env(), TdLibLoader::td_json_client_execute.load()(client, request.c_str()));
}
void ClientDestroy(const Napi::CallbackInfo& info) {
  ClientWorker(info)->Shutdown(info.Env());
}
} // namespace Tdo

namespace Tdn {
void Init(const Napi::CallbackInfo& info) {
  auto env = info.Env();
  RequireLoaded(env);
  double timeout = Timeout(info);
  if (TdDispatcher::IsActive()) {
    throw Napi::Error::New(env, "The managed dispatcher owns the TDLib receive stream");
  }
  if (modern_owner != nullptr) {
    throw Napi::Error::New(env, "The worker is already initialized in a Node environment");
  }
  auto worker = ReceiveWorker::Create(env, nullptr, timeout);
  State(env)->modern_worker = worker.release();
  modern_owner = env;
}
void Ref(const Napi::CallbackInfo& info) { ModernWorker(info.Env())->Ref(info.Env()); }
void Unref(const Napi::CallbackInfo& info) { ModernWorker(info.Env())->Unref(info.Env()); }
Napi::Value CreateClientId(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  ModernWorker(info.Env());
  int id = TdLibLoader::td_create_client_id.load()();
  if (id <= 0) throw Napi::Error::New(info.Env(), "Invalid client ID returned by TDLib");
  // The new API has no destroy function; TDLib can own clients after env teardown.
  TdLibLoader::MarkClientIdCreated();
  return Napi::Number::New(info.Env(), id);
}
void Send(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  if (TdDispatcher::IsActive()) {
    throw Napi::Error::New(info.Env(), "Use the managed client API while the dispatcher is active");
  }
  int id = Integer(info.Env(), info[0], 1, INT32_MAX, "Invalid client ID");
  auto request = Request(info, 1);
  TdLibLoader::td_send.load()(id, request.c_str());
}
Napi::Value Receive(const Napi::CallbackInfo& info) { return ModernWorker(info.Env())->NewTask(info.Env()); }
Napi::Value Execute(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  auto request = Request(info, 0);
  return Response(info.Env(), TdLibLoader::td_execute.load()(request.c_str()));
}
} // namespace Tdn

namespace TdCallbacks {
struct LogData {
  int level;
  std::string message;
};
void CallJs(Napi::Env env, Napi::Function callback, void*, LogData* raw) {
  std::unique_ptr<LogData> data(raw);
  if (env == nullptr || callback.IsEmpty()) return;
  napi_value args[2], receiver, result;
  if (napi_create_int32(env, data->level, &args[0]) != napi_ok ||
      napi_create_string_utf8(env, data->message.data(), data->message.size(), &args[1]) != napi_ok ||
      napi_get_undefined(env, &receiver) != napi_ok) return;
  if (napi_call_function(env, receiver, callback, 2, args, &result) == napi_pending_exception) {
    napi_value error;
    if (napi_get_and_clear_last_exception(env, &error) == napi_ok) {
      napi_fatal_exception(env, error);
    }
  }
}

using Tsfn = Napi::TypedThreadSafeFunction<void, LogData, CallJs>;
std::unique_ptr<Tsfn> callback;
std::mutex callback_mutex;
napi_env owner = nullptr;

extern "C" void Log(int level, const char* message) {
  // TDLib forbids calling any TDLib method inside this callback. Never take
  // the loader mutex here; TDLib calls us while JS entry points hold it.
  std::lock_guard<std::mutex> lock(callback_mutex);
  if (!callback) return;
  try {
    auto data = std::make_unique<LogData>();
    data->level = level;
    // Log messages are diagnostic text, so truncating them is safe.
    constexpr size_t max_length = 16 * 1024;
    size_t length = 0;
    if (message != nullptr) while (length < max_length && message[length] != '\0') ++length;
    data->message.assign(message == nullptr ? "" : message, length);
    if (callback->NonBlockingCall(data.get()) == napi_ok) data.release();
    // Queue-full and closing results release the message immediately.
  } catch (...) {
    // Exceptions must never escape into TDLib's C callback.
  }
}

void Clear(napi_env env) {
  if (owner != env) return;
  TdLibLoader::td_set_log_message_callback.load()(0, nullptr);
  std::lock_guard<std::mutex> lock(callback_mutex);
  callback->Release();
  callback.reset();
  owner = nullptr;
  TdLibLoader::ReleaseResource();
}

void SetLogMessageCallback(const Napi::CallbackInfo& info) {
  auto env = info.Env();
  RequireLoaded(env);
  int level = Integer(env, info[0], 0, 1024, "Invalid verbosity level");
  if (info.Length() < 2 || (!info[1].IsNull() && !info[1].IsUndefined() && !info[1].IsFunction())) {
    throw Napi::TypeError::New(env, "Expected second argument to be a function, null, or undefined");
  }
  if (owner != nullptr && owner != env) {
    throw Napi::Error::New(env, "The log callback belongs to another Node environment");
  }
  if (info[1].IsNull() || info[1].IsUndefined()) {
    Clear(env);
    return;
  }
  // Bounded to at most 256 * 16 KiB of queued message text during log floods.
  auto next = std::make_unique<Tsfn>(Tsfn::New(
    env, info[1].As<Napi::Function>(), "TdCallbackTSFN", 256, 1));
  next->Unref(env);
  bool retained = owner != nullptr;
  {
    std::lock_guard<std::mutex> lock(callback_mutex);
    if (callback) callback->Release();
    callback = std::move(next);
    owner = env;
  }
  if (!retained) TdLibLoader::RetainResource();
  // Outside callback_mutex: registering may synchronously emit a log message.
  TdLibLoader::td_set_log_message_callback.load()(level, Log);
}
} // namespace TdCallbacks

namespace {
void Cleanup(void* data) {
  auto* state = static_cast<AddonState*>(data);
  std::lock_guard<std::recursive_mutex> lock(TdLibLoader::Mutex());
  for (auto* worker : state->workers) {
    worker->Shutdown();
    worker->DetachState();
  }
  state->workers.clear();
  if (state->modern_worker != nullptr) {
    state->modern_worker->Release();
    state->modern_worker = nullptr;
    modern_owner = nullptr;
  }
}

// Serialize native entry points across worker_threads so load/unload cannot
// race with synchronous calls or client/callback creation.
template <typename Callback>
Napi::Function Export(Napi::Env env, Callback callback) {
  return Napi::Function::New(env, [callback](const Napi::CallbackInfo& info) -> Napi::Value {
    std::lock_guard<std::recursive_mutex> lock(TdLibLoader::Mutex());
    if constexpr (std::is_void_v<decltype(callback(info))>) {
      callback(info);
      return info.Env().Undefined();
    } else {
      return callback(info);
    }
  });
}
} // namespace

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  auto state = std::make_unique<AddonState>();
  env.SetInstanceData<AddonState>(state.get());
  napi_add_env_cleanup_hook(env, Cleanup, state.get());
  state.release();
  // Register separately so the callback is removed while TDLib is still loaded.
  napi_add_env_cleanup_hook(env, [](void* data) {
    std::lock_guard<std::recursive_mutex> lock(TdLibLoader::Mutex());
    TdCallbacks::Clear(static_cast<napi_env>(data));
  }, env);

  exports["td_json_client_create"] = Export(env, Tdo::ClientCreate);
  exports["td_json_client_send"] = Export(env, Tdo::ClientSend);
  exports["td_json_client_receive"] = Export(env, Tdo::ClientReceive);
  exports["td_json_client_execute"] = Export(env, Tdo::ClientExecute);
  exports["td_json_client_destroy"] = Export(env, Tdo::ClientDestroy);
  exports["td_client_create"] = Export(env, [](const Napi::CallbackInfo& info) {
    if (modern_owner != nullptr) {
      throw Napi::Error::New(info.Env(), "The raw receiver owns the TDLib receive stream");
    }
    return TdDispatcher::Create(info);
  });
  exports["td_client_send"] = Export(env, TdDispatcher::Send);
  exports["td_client_receive"] = Export(env, TdDispatcher::Receive);
  exports["td_client_execute"] = Export(env, TdDispatcher::Execute);
  exports["td_client_destroy"] = Export(env, TdDispatcher::Destroy);
  exports["tdn_init"] = Export(env, Tdn::Init);
  exports["tdn_ref"] = Export(env, Tdn::Ref);
  exports["tdn_unref"] = Export(env, Tdn::Unref);
  exports["td_create_client_id"] = Export(env, Tdn::CreateClientId);
  exports["td_send"] = Export(env, Tdn::Send);
  exports["td_receive"] = Export(env, Tdn::Receive);
  exports["td_execute"] = Export(env, Tdn::Execute);
  exports["td_set_log_message_callback"] = Export(env, TdCallbacks::SetLogMessageCallback);
  exports["load_tdjson_dynamic"] = Export(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::LoadTdJsonDynamic(info);
  });
  exports["is_td_loaded"] = Export(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::IsTdLoaded(info);
  });
  exports["unload_tdjson"] = Export(env, [](const Napi::CallbackInfo& info) {
    TdLibLoader::UnloadTdJson(info);
  });
  exports["get_loading_mode"] = Export(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::GetLoadingMode(info);
  });
  exports["load_tdjson"] = exports.Get("load_tdjson_dynamic");
  return exports;
}

NODE_API_MODULE(addon, Init)
