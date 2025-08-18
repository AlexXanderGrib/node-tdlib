#define NAPI_VERSION 5
#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1

#include <napi.h>
#include <thread>
#include <chrono>
#include <atomic>
#include <mutex>
#include <condition_variable>
#include <memory>
#include <string>

#include "tdlib_loader.h"

// Error handling macros with better safety
#define SAFE_THROW(TYPE, MSG, RET) \
  do { \
    auto error = TYPE::New(env, MSG); \
    error.ThrowAsJavaScriptException(); \
    return RET; \
  } while(0)

#define FAIL(MSG, RET) SAFE_THROW(Napi::Error, MSG, RET)
#define TYPEFAIL(MSG, RET) SAFE_THROW(Napi::TypeError, MSG, RET)

// Result type for operations that can fail
enum class OperationResult {
  SUCCESS,
  INVALID_TIMEOUT,
  INVALID_CLIENT_ID,
  INVALID_VERBOSITY,
  WORKER_CREATION_FAILED,
  THREAD_CREATION_FAILED,
  ALREADY_DESTROYED,
  CLIENT_NULL
};

// Validation helpers
namespace ValidationHelpers {
  bool IsValidTimeout(double timeout) {
    return timeout >= 0.0 && timeout <= 300.0; // Max 5 minutes
  }
  
  bool IsValidClientId(int client_id) {
    return client_id > 0 && client_id < INT32_MAX;
  }
  
  bool IsValidVerbosityLevel(int level) {
    return level >= 0 && level <= 1023; // TDLib max verbosity
  }
  
  std::string SafeStringCopy(const char* str) {
    if (str == nullptr) return "";
    // Limit string length to prevent excessive memory usage
    const size_t MAX_STRING_LENGTH = 1024 * 1024; // 1MB
    size_t len = strnlen(str, MAX_STRING_LENGTH);
    return std::string(str, len);
  }
}

class ReceiveWorker {
public:
  // Constructor that returns result code instead of throwing
  static OperationResult Create(const Napi::Env& env, void *client, double timeout, 
                               std::unique_ptr<ReceiveWorker>& out_worker) {
    if (!ValidationHelpers::IsValidTimeout(timeout)) {
      return OperationResult::INVALID_TIMEOUT;
    }
    
    auto worker = std::unique_ptr<ReceiveWorker>(new ReceiveWorker());
    if (!worker->Initialize(env, client, timeout)) {
      return OperationResult::WORKER_CREATION_FAILED;
    }
    
    out_worker = std::move(worker);
    return OperationResult::SUCCESS;
  }

  ~ReceiveWorker() {
    shutdown();
  }

  void shutdown() {
    bool expected = false;
    if (!destroyed_.compare_exchange_strong(expected, true)) {
      return; // Already destroyed
    }
    
    {
      std::lock_guard<std::mutex> lock(mutex_);
      stop_ = true;
      ready_ = true;
    }
    cv_.notify_all();
    
    // Clean up client safely
    void* expected_client = client_.load();
    if (expected_client != nullptr && client_.compare_exchange_strong(expected_client, nullptr)) {
      auto destroy_func = TdLibLoader::td_json_client_destroy.load();
      if (destroy_func != nullptr) {
        destroy_func(expected_client);
      }
    }
    
    if (thread_.joinable()) {
      thread_.join();
    }
  }

  // Thread-safe reference counting
  void AddRef() {
    ref_count_.fetch_add(1);
  }
  
  void Release() {
    if (ref_count_.fetch_sub(1) == 1) {
      delete this;
    }
  }

  // A task can be added only after the previous task is finished.
  Napi::Promise NewTask(const Napi::Env& env) {
    if (destroyed_.load()) {
      auto error = Napi::Error::New(env, "Worker has been destroyed");
      auto fail_deferred = Napi::Promise::Deferred::New(env);
      fail_deferred.Reject(error.Value());
      return fail_deferred.Promise();
    }
    
    std::lock_guard<std::mutex> lock(deferred_mutex_);
    if (deferred_ != nullptr) {
      auto error = Napi::Error::New(env, "receive is not finished yet");
      auto fail_deferred = Napi::Promise::Deferred::New(env);
      fail_deferred.Reject(error.Value());
      return fail_deferred.Promise();
    }
    
    deferred_ = std::make_unique<Napi::Promise::Deferred>(env);
    {
      std::lock_guard<std::mutex> lock(mutex_);
      ready_ = true;
    }
    cv_.notify_all();
    return deferred_->Promise();
  }

  void Ref(const Napi::Env& env) { 
    if (!destroyed_.load()) {
      tsfn_.Ref(env); 
    }
  }
  
  void Unref(const Napi::Env& env) { 
    if (!destroyed_.load()) {
      tsfn_.Unref(env); 
    }
  }
  
  void* GetClient() { 
    return client_.load(); 
  }

private:
  ReceiveWorker() : client_(nullptr), timeout_(0.0), ready_(false), stop_(false), 
                   destroyed_(false), ref_count_(1) {}

  bool Initialize(const Napi::Env& env, void *client, double timeout) {
    client_ = client;
    timeout_ = timeout;
    
    // Create the thread-safe function directly
    tsfn_ = Tsfn::New(env, "ReceiveTSFN", 0, 1, this);
    
    // Try to create the worker thread
    bool thread_created = false;
    if (client == nullptr) { // New tdjson interface
      thread_ = std::thread(&ReceiveWorker::loop, this);
      thread_.detach();
      thread_created = true;
    } else {
      thread_ = std::thread(&ReceiveWorker::loop, this);
      thread_created = thread_.joinable();
    }
    
    if (!thread_created) {
      return false;
    }
    
    tsfn_.Ref(env);
    return true;
  }

  using TsfnCtx = ReceiveWorker;
  
  // Called on the main thread
  static void CallJs(Napi::Env env, Napi::Function, TsfnCtx *ctx, char *data) {
    if (env != nullptr && ctx != nullptr && !ctx->destroyed_.load()) {
      std::lock_guard<std::mutex> lock(ctx->deferred_mutex_);
      if (ctx->deferred_ != nullptr) {
        const char *res = data;
        auto val = (res == nullptr || *res == '\0') ? 
          env.Null() : Napi::String::New(env, res);
        
        auto deferred = std::move(ctx->deferred_);
        deferred->Resolve(val);
        // ctx may not exist anymore after this point
      }
    }
    delete[] data; // Clean up copied data
  }
  
  using Tsfn = Napi::TypedThreadSafeFunction<TsfnCtx, char, CallJs>;

  void loop() {
    std::unique_lock<std::mutex> lock(mutex_);
    while (!stop_.load()) {
      cv_.wait(lock, [this] { return ready_.load() || stop_.load(); });
      if (stop_.load()) break;
      
      ready_ = false;
      lock.unlock();
      
      const char *response = nullptr;
      void* current_client = client_.load();
      
      // Remove try-catch block since we're not using exceptions
      if (current_client == nullptr) {
        auto receive_func = TdLibLoader::td_receive.load();
        if (receive_func != nullptr) {
          response = receive_func(timeout_);
        }
      } else {
        auto receive_func = TdLibLoader::td_json_client_receive.load();
        if (receive_func != nullptr) {
          response = receive_func(current_client, timeout_);
        }
      }
      
      // Copy response to ensure thread safety
      char* data_copy = nullptr;
      if (response != nullptr && *response != '\0') {
        std::string safe_response = ValidationHelpers::SafeStringCopy(response);
        data_copy = new char[safe_response.length() + 1];
        std::strcpy(data_copy, safe_response.c_str());
      } else {
        data_copy = new char[1];
        data_copy[0] = '\0';
      }
      
      lock.lock();
      if (!stop_.load()) {
        tsfn_.NonBlockingCall(data_copy);
      } else {
        delete[] data_copy; // Clean up if stopping
      }
    }
    tsfn_.Release();
  }

  std::atomic<void*> client_;
  double timeout_;
  Tsfn tsfn_;
  std::unique_ptr<Napi::Promise::Deferred> deferred_;
  std::mutex deferred_mutex_;
  std::atomic<bool> ready_;
  std::atomic<bool> stop_;
  std::atomic<bool> destroyed_;
  std::atomic<int> ref_count_;
  std::mutex mutex_;
  std::condition_variable cv_;
  std::thread thread_;
};

// Old tdjson interface
namespace Tdo {
  Napi::Value ClientCreate(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded. Call load_tdjson_dynamic() or load_tdjson_static() first.", Napi::Value());
    }
    
    if (info.Length() < 1 || !info[0].IsNumber()) {
      TYPEFAIL("Expected first argument to be a number", Napi::Value());
    }
    
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    if (!ValidationHelpers::IsValidTimeout(timeout)) {
      FAIL("Invalid timeout value (must be 0-300 seconds)", Napi::Value());
    }
    
    auto create_func = TdLibLoader::td_json_client_create.load();
    if (create_func == nullptr) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    void *client = create_func();
    if (client == nullptr) {
      FAIL("td_json_client_create returned null", Napi::Value());
    }
    
    std::unique_ptr<ReceiveWorker> worker;
    OperationResult result = ReceiveWorker::Create(env, client, timeout, worker);
    
    if (result != OperationResult::SUCCESS) {
      // Clean up client if worker creation fails
      auto destroy_func = TdLibLoader::td_json_client_destroy.load();
      if (destroy_func != nullptr) {
        destroy_func(client);
      }
      
      const char* error_msg = "Failed to create worker";
      switch (result) {
        case OperationResult::INVALID_TIMEOUT:
          error_msg = "Invalid timeout value";
          break;
        case OperationResult::WORKER_CREATION_FAILED:
          error_msg = "Failed to create worker";
          break;
        case OperationResult::THREAD_CREATION_FAILED:
          error_msg = "Failed to create worker thread";
          break;
        default:
          error_msg = "Unknown error creating worker";
          break;
      }
      FAIL(error_msg, Napi::Value());
    }
    
    // Release ownership to the External object
    ReceiveWorker* raw_worker = worker.release();
    return Napi::External<ReceiveWorker>::New(env, raw_worker, [](Napi::Env, ReceiveWorker* worker) {
      if (worker != nullptr) {
        worker->Release();
      }
    });
  }

  void ClientSend(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    if (info.Length() < 2) {
      TYPEFAIL("Expected two arguments", );
      return;
    }
    
    if (!info[0].IsExternal()) {
      TYPEFAIL("Expected first argument to be an external object", );
      return;
    }
    
    if (!info[1].IsString()) {
      TYPEFAIL("Expected second argument to be a string", );
      return;
    }
    
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    if (worker == nullptr) {
      FAIL("Invalid worker object", );
      return;
    }
    
    void* client = worker->GetClient();
    if (client == nullptr) {
      FAIL("Client has been destroyed", );
      return;
    }
    
    auto send_func = TdLibLoader::td_json_client_send.load();
    if (send_func == nullptr) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    std::string request = info[1].As<Napi::String>().Utf8Value();
    send_func(client, request.c_str());
  }

  Napi::Value ClientReceive(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (info.Length() < 1 || !info[0].IsExternal()) {
      TYPEFAIL("Expected first argument to be an external object", Napi::Value());
    }
    
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    if (worker == nullptr) {
      FAIL("Invalid worker object", Napi::Value());
    }
    
    return worker->NewTask(env);
  }

  Napi::Value ClientExecute(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    if (info.Length() < 2) {
      TYPEFAIL("Expected two arguments", Napi::Value());
    }
    
    if (!info[1].IsString()) {
      TYPEFAIL("Expected second argument to be a string", Napi::Value());
    }
    
    void *client = nullptr;
    if (!info[0].IsNull() && !info[0].IsUndefined()) {
      if (!info[0].IsExternal()) {
        TYPEFAIL("Expected first argument to be an external object, null, or undefined", Napi::Value());
      }
      auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
      if (worker != nullptr) {
        client = worker->GetClient();
      }
    }
    
    auto execute_func = TdLibLoader::td_json_client_execute.load();
    if (execute_func == nullptr) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    std::string request = info[1].As<Napi::String>().Utf8Value();
    const char *response = execute_func(client, request.c_str());
    
    if (response == nullptr) {
      return env.Null();
    }
    
    return Napi::String::New(env, ValidationHelpers::SafeStringCopy(response));
  }

  void ClientDestroy(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (info.Length() < 1 || !info[0].IsExternal()) {
      TYPEFAIL("Expected first argument to be an external object", );
      return;
    }
    
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    if (worker != nullptr) {
      worker->shutdown(); // Safe shutdown instead of direct delete
    }
  }
}

// New tdjson interface with thread-safe singleton
namespace Tdn {
  static std::unique_ptr<ReceiveWorker> worker_ptr = nullptr;
  static std::mutex worker_mutex;
  static std::atomic<bool> init_attempted{false};
  static OperationResult last_init_result = OperationResult::SUCCESS;

  void Init(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded. Call load_tdjson_dynamic() or load_tdjson_static() first.", );
      return;
    }
    
    // Use atomic flag instead of std::once_flag to avoid potential exception issues
    bool expected = false;
    if (!init_attempted.compare_exchange_strong(expected, true)) {
      std::lock_guard<std::mutex> lock(worker_mutex);
      if (worker_ptr != nullptr) {
        FAIL("The worker is already initialized", );
        return;
      }
      
      // Return previous initialization error if any
      const char* error_msg = "Previous initialization failed";
      switch (last_init_result) {
        case OperationResult::INVALID_TIMEOUT:
          error_msg = "Invalid timeout value (must be 0-300 seconds)";
          break;
        case OperationResult::WORKER_CREATION_FAILED:
          error_msg = "Failed to create worker";
          break;
        case OperationResult::THREAD_CREATION_FAILED:
          error_msg = "Failed to create worker thread";
          break;
        default:
          break;
      }
      FAIL(error_msg, );
      return;
    }
    
    std::lock_guard<std::mutex> lock(worker_mutex);
    if (worker_ptr != nullptr) {
      FAIL("The worker is already initialized", );
      return;
    }
    
    if (info.Length() < 1 || !info[0].IsNumber()) {
      last_init_result = OperationResult::INVALID_TIMEOUT;
      FAIL("Expected first argument (timeout) to be a number", );
      return;
    }
    
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    if (!ValidationHelpers::IsValidTimeout(timeout)) {
      last_init_result = OperationResult::INVALID_TIMEOUT;
      FAIL("Invalid timeout value (must be 0-300 seconds)", );
      return;
    }
    
    std::unique_ptr<ReceiveWorker> worker;
    OperationResult result = ReceiveWorker::Create(env, nullptr, timeout, worker);
    last_init_result = result;
    
    if (result != OperationResult::SUCCESS) {
      const char* error_msg = "Failed to initialize worker";
      switch (result) {
        case OperationResult::INVALID_TIMEOUT:
          error_msg = "Invalid timeout value";
          break;
        case OperationResult::WORKER_CREATION_FAILED:
          error_msg = "Failed to create worker";
          break;
        case OperationResult::THREAD_CREATION_FAILED:
          error_msg = "Failed to create worker thread";
          break;
        default:
          break;
      }
      FAIL(error_msg, );
      return;
    }
    
    worker_ptr = std::move(worker);
  }

  void Ref(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    std::lock_guard<std::mutex> lock(worker_mutex);
    if (worker_ptr == nullptr) {
      FAIL("The worker is uninitialized", );
      return;
    }
    worker_ptr->Ref(env);
  }

  void Unref(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    std::lock_guard<std::mutex> lock(worker_mutex);
    if (worker_ptr == nullptr) {
      FAIL("The worker is uninitialized", );
      return;
    }
    worker_ptr->Unref(env);
  }

  Napi::Value CreateClientId(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    auto create_func = TdLibLoader::td_create_client_id.load();
    auto send_func = TdLibLoader::td_send.load();
    auto receive_func = TdLibLoader::td_receive.load();
    
    if (create_func == nullptr) {
      FAIL("td_create_client_id is not available", Napi::Value());
    }
    if (send_func == nullptr) {
      FAIL("td_send is not available", Napi::Value());
    }
    if (receive_func == nullptr) {
      FAIL("td_receive is not available", Napi::Value());
    }
    
    {
      std::lock_guard<std::mutex> lock(worker_mutex);
      if (worker_ptr == nullptr) {
        FAIL("The worker is uninitialized", Napi::Value());
      }
    }
    
    int client_id = create_func();
    if (!ValidationHelpers::IsValidClientId(client_id)) {
      FAIL("Invalid client ID returned by TDLib", Napi::Value());
    }
    
    return Napi::Number::New(env, client_id);
  }

  void Send(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    if (info.Length() < 2) {
      TYPEFAIL("Expected two arguments", );
      return;
    }
    
    if (!info[0].IsNumber()) {
      TYPEFAIL("Expected first argument to be a number", );
      return;
    }
    
    if (!info[1].IsString()) {
      TYPEFAIL("Expected second argument to be a string", );
      return;
    }
    
    int client_id = info[0].As<Napi::Number>().Int32Value();
    if (!ValidationHelpers::IsValidClientId(client_id)) {
      FAIL("Invalid client ID", );
      return;
    }
    
    auto send_func = TdLibLoader::td_send.load();
    if (send_func == nullptr) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    std::string request = info[1].As<Napi::String>().Utf8Value();
    send_func(client_id, request.c_str());
  }

  Napi::Value Receive(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    std::lock_guard<std::mutex> lock(worker_mutex);
    if (worker_ptr == nullptr) {
      FAIL("The worker is uninitialized", Napi::Value());
    }
    return worker_ptr->NewTask(env);
  }

  Napi::Value Execute(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    if (info.Length() < 1 || !info[0].IsString()) {
      TYPEFAIL("Expected first argument to be a string", Napi::Value());
    }
    
    auto execute_func = TdLibLoader::td_execute.load();
    if (execute_func == nullptr) {
      FAIL("TDLib not loaded", Napi::Value());
    }
    
    std::string request = info[0].As<Napi::String>().Utf8Value();
    const char *response = execute_func(request.c_str());
    
    if (response == nullptr) {
      return env.Null();
    }
    
    return Napi::String::New(env, ValidationHelpers::SafeStringCopy(response));
  }
}

namespace TdCallbacks {
  using TsfnCtx = std::nullptr_t;
  struct TsfnData {
    int verbosity_level;
    std::string message;
    
    TsfnData(int level, const std::string& msg) 
      : verbosity_level(level), message(msg) {}
  };
  
  void CallJs(Napi::Env env, Napi::Function callback, TsfnCtx *, TsfnData *data) {
    if (data == nullptr) return;
    
    if (env != nullptr && callback != nullptr) {
      // Remove try-catch since we're not using exceptions
      // Just call the callback - if it fails, N-API will handle it
      callback.Call({
        Napi::Number::New(env, data->verbosity_level),
        Napi::String::New(env, data->message)
      });
    }
    delete data;
  }
  
  using Tsfn = Napi::TypedThreadSafeFunction<TsfnCtx, TsfnData, CallJs>;

  static std::unique_ptr<Tsfn> tsfn_ptr = nullptr;
  static std::mutex tsfn_mutex;

  extern "C" void c_message_callback(int verbosity_level, const char *message) {
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn_ptr == nullptr) return;
    
    if (!ValidationHelpers::IsValidVerbosityLevel(verbosity_level)) {
      return; // Ignore invalid verbosity levels
    }
    
    std::string safe_message = ValidationHelpers::SafeStringCopy(message);
    auto *data = new TsfnData(verbosity_level, safe_message);
    tsfn_ptr->NonBlockingCall(data);
  }

  void SetLogMessageCallback(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (!TdLibLoader::IsTdLoaded()) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    if (info.Length() < 2) {
      TYPEFAIL("Expected two arguments", );
      return;
    }
    
    if (!info[0].IsNumber()) {
      TYPEFAIL("Expected first argument to be a number", );
      return;
    }
    
    int max_verbosity_level = info[0].As<Napi::Number>().Int32Value();
    if (!ValidationHelpers::IsValidVerbosityLevel(max_verbosity_level)) {
      FAIL("Invalid verbosity level", );
      return;
    }
    
    auto callback_func = TdLibLoader::td_set_log_message_callback.load();
    if (callback_func == nullptr) {
      FAIL("TDLib not loaded", );
      return;
    }
    
    if (info[1].IsNull() || info[1].IsUndefined()) {
      callback_func(max_verbosity_level, nullptr);
      std::lock_guard<std::mutex> lock(tsfn_mutex);
      if (tsfn_ptr != nullptr) {
        tsfn_ptr->Release();
        tsfn_ptr.reset();
      }
      return;
    }
    
    if (!info[1].IsFunction()) {
      TYPEFAIL("Expected second argument to be one of: a function, null, undefined", );
      return;
    }
    
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn_ptr != nullptr) {
      tsfn_ptr->Release();
    }
    
    // Create TSFN directly
    tsfn_ptr = std::make_unique<Tsfn>(
      Tsfn::New(env, info[1].As<Napi::Function>(), "TdCallbackTSFN", 0, 1)
    );
    tsfn_ptr->Unref(env);
    callback_func(max_verbosity_level, &c_message_callback);
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  // Old interface
  exports["td_json_client_create"] = Napi::Function::New(env, Tdo::ClientCreate);
  exports["td_json_client_send"] = Napi::Function::New(env, Tdo::ClientSend);
  exports["td_json_client_receive"] = Napi::Function::New(env, Tdo::ClientReceive);
  exports["td_json_client_execute"] = Napi::Function::New(env, Tdo::ClientExecute);
  exports["td_json_client_destroy"] = Napi::Function::New(env, Tdo::ClientDestroy);
  
  // New interface
  exports["tdn_init"] = Napi::Function::New(env, Tdn::Init);
  exports["tdn_ref"] = Napi::Function::New(env, Tdn::Ref);
  exports["tdn_unref"] = Napi::Function::New(env, Tdn::Unref);
  exports["td_create_client_id"] = Napi::Function::New(env, Tdn::CreateClientId);
  exports["td_send"] = Napi::Function::New(env, Tdn::Send);
  exports["td_receive"] = Napi::Function::New(env, Tdn::Receive);
  exports["td_execute"] = Napi::Function::New(env, Tdn::Execute);
  
  // Callbacks
  exports["td_set_log_message_callback"] = Napi::Function::New(env, TdCallbacks::SetLogMessageCallback);
  
  // Library loading functions
  exports["load_tdjson_dynamic"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::LoadTdJsonDynamic(info);
  });

  exports["load_tdjson_static"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::LoadTdJsonStatic(info);
  });

  exports["is_td_loaded"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::IsTdLoaded(info);
  });

  exports["unload_tdjson"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::UnloadTdJson(info);
  });

  exports["get_loading_mode"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::GetLoadingMode(info);
  });

  // Legacy function for backward compatibility
  exports["load_tdjson"] = Napi::Function::New(env, [](const Napi::CallbackInfo& info) {
    return TdLibLoader::LoadTdJsonDynamic(info);
  });
  
  
  return exports;
}

NODE_API_MODULE(addon, Init)