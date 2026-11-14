#include "td_dispatcher.h"
#include "tdlib_loader.h"
#include "json_envelope.h"

#include <algorithm>
#include <chrono>
#include <cmath>
#include <condition_variable>
#include <deque>
#include <memory>
#include <map>
#include <mutex>
#include <string>
#include <thread>
#include <unordered_map>
#include <vector>

namespace TdDispatcher {
namespace {
using Clock = std::chrono::steady_clock;
struct Environment;
struct Client;
using Deadlines = std::multimap<Clock::time_point, std::weak_ptr<Client>>;
struct Client {
  int id = 0;
  double timeout = 0;
  size_t max_messages = 256;
  size_t max_bytes = 8 * 1024 * 1024;
  size_t queued_bytes = 0;
  std::deque<std::string> responses;
  std::weak_ptr<Environment> owner;
  napi_deferred receive = nullptr;
  napi_deferred close = nullptr;
  Deadlines::iterator timer;
  bool has_timer = false;
  bool timed_out = false;
  bool closing = false;
  bool closed = false;
  bool external_gone = false;
  bool ready = false; // Listed in Environment::ready for the next delivery.
  const char* failure = nullptr;
};
struct Environment {
  napi_env env;
  napi_threadsafe_function tsfn = nullptr;
  std::unordered_map<int, std::shared_ptr<Client>> clients;
  // Clients whose state changed since the last delivery, so delivery cost
  // follows traffic rather than the number of clients in this environment.
  std::vector<std::shared_ptr<Client>> ready;
  bool alive = true;
  bool notified = false;
  bool referenced = false;
};

class Dispatcher {
 public:
  std::recursive_mutex mutex;
  std::mutex lifecycle;
  std::condition_variable_any cv;
  std::unordered_map<napi_env, std::shared_ptr<Environment>> environments;
  std::unordered_map<int, std::shared_ptr<Client>> clients;
  Deadlines deadlines;
  std::thread thread;
  bool stop = false;

  ~Dispatcher() {
    {
      std::lock_guard<std::recursive_mutex> lock(mutex);
      stop = true;
    }
    cv.notify_all();
    if (thread.joinable()) thread.join();
  }

  void Notify(const std::shared_ptr<Client>& client) {
    auto owner = client->owner.lock();
    if (!owner || !owner->alive) return;
    if (!client->ready) {
      client->ready = true;
      owner->ready.push_back(client);
    }
    if (owner->notified) return;
    owner->notified = true;
    auto status = napi_call_threadsafe_function(owner->tsfn, nullptr, napi_tsfn_nonblocking);
    if (status != napi_ok && status != napi_queue_full) owner->notified = false;
  }

  void BeginClose(const std::shared_ptr<Client>& client) {
    if (!client->closed && !client->closing) {
      TdLibLoader::td_send.load()(client->id, "{\"@type\":\"close\"}");
    }
    client->closing = true;
    CancelTimer(*client);
    client->responses.clear();
    client->queued_bytes = 0;
    Notify(client);
  }

  void CancelTimer(Client& client) {
    if (!client.has_timer) return;
    deadlines.erase(client.timer);
    client.has_timer = false;
  }

  // The envelope (id, closed) is parsed by the caller before taking the lock.
  void Route(std::string response, int id, bool closed) {
    auto found = clients.find(id);
    if (found == clients.end()) return;
    auto client = found->second;
    auto owner = client->owner.lock();
    if (!client->closing && owner && owner->alive) {
      // One oversized response may satisfy an already waiting consumer intact.
      // Backlogs are bounded; overflow closes this client, not the receiver.
      // The head response is already claimed by the waiting receive and is
      // only awaiting JS delivery, so it does not count as backlog.
      const bool waiting = client->receive != nullptr;
      const bool direct = waiting && client->responses.empty();
      const bool claimed = waiting && !client->responses.empty();
      const size_t backlog_count = client->responses.size() - (claimed ? 1 : 0);
      const size_t backlog_bytes = client->queued_bytes -
        (claimed ? client->responses.front().size() : 0);
      if (backlog_count >= client->max_messages ||
          (!direct && (response.size() > client->max_bytes ||
            backlog_bytes > client->max_bytes - response.size()))) {
        client->failure = "Client receive queue overflow; client is destroyed";
        BeginClose(client);
      } else {
        client->queued_bytes += response.size();
        client->responses.emplace_back(std::move(response));
      }
    }
    if (closed) {
      client->closed = true;
      clients.erase(found);
      cv.notify_all();
    }
    if (!client->responses.empty() || closed) CancelTimer(*client);
    if (client->receive || client->close || closed) Notify(client);
  }

  void Loop() noexcept {
    std::unique_lock<std::recursive_mutex> lock(mutex);
    while (!stop) {
      if (clients.empty()) {
        cv.wait(lock, [this] { return stop || !clients.empty(); });
        if (stop) break;
      }
      double wait = 0.1;
      auto now = Clock::now();
      if (!deadlines.empty()) {
        wait = std::min(wait, std::max(0.0,
          std::chrono::duration<double>(deadlines.begin()->first - now).count()));
      }
      lock.unlock();
      std::string response;
      bool failed = false;
      int id = 0;
      bool closed = false;
      try {
        const char* raw = TdLibLoader::td_receive.load()(wait);
        if (raw) {
          response.assign(raw);
          // Scan large responses before locking so JS threads are not blocked.
          id = TdJsonEnvelope::ClientId(response);
          closed = id != 0 && TdJsonEnvelope::Closed(response);
        }
      } catch (...) { failed = true; }
      lock.lock();
      try {
        if (id != 0) Route(std::move(response), id, closed);
        now = Clock::now();
        if (failed) {
          for (auto& entry : clients) {
            auto& client = entry.second;
            client->failure = "TDLib receive failed; client is destroyed";
            BeginClose(client);
          }
        }
        while (!deadlines.empty() && deadlines.begin()->first <= now) {
          auto client = deadlines.begin()->second.lock();
          if (!client) {
            deadlines.erase(deadlines.begin());
            continue;
          }
          CancelTimer(*client);
          client->timed_out = true;
          Notify(client);
        }
      } catch (...) {
        // Never propagate a C++ exception out of a native receiver thread.
        // Keep draining closure events even after notification/allocation failure.
        for (auto& entry : clients) {
          auto& client = entry.second;
          try {
            client->failure = "TDLib dispatch failed; client is destroyed";
            BeginClose(client);
          } catch (...) {}
        }
      }
    }
  }
};
Dispatcher& Broker() { static Dispatcher broker; return broker; }

void Reject(napi_env env, napi_deferred deferred, std::string_view message) noexcept {
  if (!env || !deferred) return;
  napi_value text, error;
  if (napi_create_string_utf8(env, message.data(), message.size(), &text) == napi_ok &&
      napi_create_error(env, nullptr, text, &error) == napi_ok) {
    napi_reject_deferred(env, deferred, error);
  }
}
struct Delivery {
  napi_deferred deferred;
  std::string response;
  const char* error = nullptr;
};
bool Active(const std::shared_ptr<Environment>& owner) {
  for (const auto& entry : owner->clients) if (!entry.second->closed) return true;
  return false;
}
bool NeedsReference(const Environment& owner) {
  for (const auto& entry : owner.clients) {
    auto& client = entry.second;
    if (!client->closed || client->receive || client->close) return true;
  }
  return false;
}
void Ref(const std::shared_ptr<Environment>& owner) {
  if (!owner->referenced) {
    napi_ref_threadsafe_function(owner->env, owner->tsfn);
    owner->referenced = true;
  }
}
void CallJs(napi_env env, napi_value, void* context, void*) noexcept {
  if (!env) return;
  auto* owner = static_cast<Environment*>(context);
  auto& broker = Broker();
  try {
    std::vector<Delivery> deliveries;
    {
      std::lock_guard<std::recursive_mutex> lock(broker.mutex);
      if (!owner->alive) return;
      std::vector<std::shared_ptr<Client>> ready;
      ready.swap(owner->ready);
      deliveries.reserve(ready.size() * 2);
      owner->notified = false;
      for (const auto& client : ready) {
        client->ready = false;
        if (client->receive && (client->closing || client->failure ||
            !client->responses.empty() || client->timed_out || client->closed)) {
          Delivery delivery{client->receive, {}, {}};
          if (client->closing || client->failure) {
            delivery.error = client->failure ? client->failure : "Client is destroyed";
          } else if (!client->responses.empty()) {
            delivery.response = std::move(client->responses.front());
            client->responses.pop_front();
            client->queued_bytes -= delivery.response.size();
          } else if (client->closed) {
            delivery.error = "Client is destroyed";
          }
          deliveries.push_back(std::move(delivery));
          broker.CancelTimer(*client);
          client->receive = nullptr;
          client->timed_out = false;
        }
        if (client->close && client->closed) {
          deliveries.push_back({client->close, {}, {}});
          client->close = nullptr;
        }
        if (client->external_gone && client->closed && !client->receive && !client->close) {
          owner->clients.erase(client->id);
        }
      }
      if (owner->referenced && !NeedsReference(*owner)) {
        napi_unref_threadsafe_function(env, owner->tsfn);
        owner->referenced = false;
      }
    }
    for (const auto& delivery : deliveries) {
      if (delivery.error) {
        Reject(env, delivery.deferred, delivery.error);
        continue;
      }
      napi_value value;
      const auto status = delivery.response.empty() ? napi_get_null(env, &value) :
        napi_create_string_utf8(env, delivery.response.data(), delivery.response.size(), &value);
      if (status == napi_ok) napi_resolve_deferred(env, delivery.deferred, value);
      else Reject(env, delivery.deferred, "Failed to create TDLib response");
    }
  } catch (...) {
    // Environment shutdown can forbid JS calls even with a non-null env.
  }
}

void Cleanup(void* data) noexcept {
  auto env = static_cast<napi_env>(data);
  auto& broker = Broker();
  try {
    // No loader lock: the receive thread must drain closure while this hook waits.
    std::shared_ptr<Environment> owner;
    {
      std::unique_lock<std::recursive_mutex> lock(broker.mutex);
      auto found = broker.environments.find(env);
      if (found == broker.environments.end()) return;
      owner = found->second;
      owner->alive = false;
      owner->ready.clear();
      for (auto& entry : owner->clients) {
        auto& client = entry.second;
        client->receive = nullptr;
        client->close = nullptr;
        client->owner.reset();
        broker.BeginClose(client);
      }
      // Closing can take as long as TDLib needs. Do not hold `lifecycle` here:
      // td_client_create in another environment holds the loader mutex while
      // waiting for it, which would stall every native call in the process.
      broker.cv.wait(lock, [&owner] { return !Active(owner); });
    }
    // The environment stays registered until here, so the receiver cannot be
    // stopped or restarted underneath the wait above.
    std::lock_guard<std::mutex> lifecycle(broker.lifecycle);
    std::unique_lock<std::recursive_mutex> lock(broker.mutex);
    owner->clients.clear();
    broker.environments.erase(env);
    napi_release_threadsafe_function(owner->tsfn, napi_tsfn_abort);
    bool last = broker.environments.empty();
    if (last) broker.stop = true;
    lock.unlock();
    broker.cv.notify_all();
    // Do not allow the native addon to unload while its receiver executes code.
    if (last && broker.thread.joinable()) broker.thread.join();
  } catch (...) {
    // Cleanup hooks are C callbacks and may never throw into Node.
  }
}

std::shared_ptr<Environment> Attach(Napi::Env env) {
  auto& broker = Broker();
  auto found = broker.environments.find(env);
  if (found != broker.environments.end()) return found->second;
  auto owner = std::make_shared<Environment>();
  owner->env = env;
  auto name = Napi::String::New(env, "TDLibSharedReceiver");
  auto finalizer = std::make_unique<std::shared_ptr<Environment>>(owner);
  auto status = napi_create_threadsafe_function(env, nullptr, nullptr, name, 1, 1,
    finalizer.get(), [](napi_env, void* data, void*) {
      delete static_cast<std::shared_ptr<Environment>*>(data);
    }, owner.get(), CallJs, &owner->tsfn);
  if (status != napi_ok) throw Napi::Error::New(env, "Failed to create TDLib dispatcher");
  finalizer.release();
  napi_unref_threadsafe_function(env, owner->tsfn);
  try {
    broker.environments.emplace(env, owner);
    status = napi_add_env_cleanup_hook(env, Cleanup, env);
    if (status != napi_ok) throw Napi::Error::New(env, "Failed to register TDLib cleanup");
    if (!broker.thread.joinable()) {
      broker.stop = false;
      broker.thread = std::thread([&broker] { broker.Loop(); });
    }
  } catch (...) {
    broker.environments.erase(env);
    napi_remove_env_cleanup_hook(env, Cleanup, env);
    napi_release_threadsafe_function(owner->tsfn, napi_tsfn_abort);
    throw;
  }
  return owner;
}

std::unordered_map<void*, std::weak_ptr<Client>> handles;

std::shared_ptr<Client> Get(const Napi::CallbackInfo& info, bool live = false) {
  if (info.Length() < 1 || !info[0].IsExternal()) {
    throw Napi::TypeError::New(info.Env(), "Expected a client external object");
  }
  // Check membership before dereferencing an External supplied by another addon.
  auto pointer = info[0].As<Napi::External<std::shared_ptr<Client>>>().Data();
  auto& broker = Broker();
  auto owner = broker.environments.find(info.Env());
  if (owner == broker.environments.end()) throw Napi::TypeError::New(info.Env(), "Unknown client");
  auto handle = handles.find(pointer);
  auto client = handle == handles.end() ? nullptr : handle->second.lock();
  if (!client || client->owner.lock() != owner->second) {
    throw Napi::TypeError::New(info.Env(), "Unknown client");
  }
  if (live && (client->closing || client->closed || client->failure)) {
    throw Napi::Error::New(info.Env(), client->failure ? client->failure : "Client is destroyed");
  }
  return client;
}

std::string Request(const Napi::CallbackInfo& info, size_t index) {
  if (info.Length() <= index || !info[index].IsString()) {
    throw Napi::TypeError::New(info.Env(), "Expected request to be a string");
  }
  auto request = info[index].As<Napi::String>().Utf8Value();
  if (request.find('\0') != std::string::npos) throw Napi::TypeError::New(info.Env(), "Request must not contain NUL characters");
  return request;
}
void RequireLoaded(Napi::Env env) {
  if (!TdLibLoader::IsTdLoaded()) throw Napi::Error::New(env, "TDLib not loaded. Call load_tdjson() first.");
}
Napi::Promise Promise(Napi::Env env, napi_deferred* deferred) {
  napi_value promise;
  if (napi_create_promise(env, deferred, &promise) != napi_ok) throw Napi::Error::New(env, "Failed to create TDLib promise");
  return Napi::Promise(env, promise);
}
size_t Limit(Napi::Env env, const Napi::Value& value, size_t fallback) {
  if (value.IsUndefined()) return fallback;
  if (!value.IsNumber()) throw Napi::TypeError::New(env, "Queue limit must be a number");
  double number = value.As<Napi::Number>().DoubleValue();
  if (!std::isfinite(number) || std::floor(number) != number || number < 1 || number > 1024 * 1024 * 1024) {
    throw Napi::RangeError::New(env, "Invalid queue limit (must be an integer from 1 to 1073741824)");
  }
  return static_cast<size_t>(number);
}
} // namespace

bool IsActive() {
  std::lock_guard<std::recursive_mutex> lock(Broker().mutex);
  return !Broker().environments.empty();
}
Napi::Value Create(const Napi::CallbackInfo& info) {
  auto env = info.Env();
  RequireLoaded(env);
  if (info.Length() < 1 || !info[0].IsNumber()) throw Napi::TypeError::New(env, "Expected timeout to be a number");
  double timeout = info[0].As<Napi::Number>().DoubleValue();
  if (!std::isfinite(timeout) || timeout < 0 || timeout > 300) throw Napi::RangeError::New(env, "Invalid timeout value (must be 0-300 seconds)");
  auto client = std::make_shared<Client>();
  client->timeout = timeout;
  client->max_messages = Limit(env, info[1], client->max_messages);
  client->max_bytes = Limit(env, info[2], client->max_bytes);
  auto& broker = Broker();
  std::lock_guard<std::mutex> lifecycle(broker.lifecycle);
  std::lock_guard<std::recursive_mutex> lock(broker.mutex);
  auto owner = Attach(env);
  client->owner = owner;
  client->id = TdLibLoader::td_create_client_id.load()();
  if (client->id <= 0) throw Napi::Error::New(env, "Invalid client ID returned by TDLib");
  TdLibLoader::MarkClientIdCreated();
  auto external_data = std::make_unique<std::shared_ptr<Client>>(client);
  try {
    broker.clients.emplace(client->id, client);
    owner->clients.emplace(client->id, client);
    handles.emplace(external_data.get(), client);
    auto external = Napi::External<std::shared_ptr<Client>>::New(env, external_data.get(),
      [](Napi::Env, std::shared_ptr<Client>* data) noexcept {
        auto& broker = Broker();
        std::lock_guard<std::recursive_mutex> lock(broker.mutex);
        auto client = *data;
        handles.erase(data);
        client->external_gone = true;
        try { broker.BeginClose(client); } catch (...) {}
        if (auto owner = client->owner.lock()) {
          if (client->closed && !client->receive && !client->close) owner->clients.erase(client->id);
        }
        delete data;
      });
    external_data.release();
    Ref(owner);
    broker.cv.notify_all();
    return external;
  } catch (...) {
    if (external_data) handles.erase(external_data.get());
    client->external_gone = true;
    broker.BeginClose(client);
    broker.cv.notify_all();
    throw;
  }
}
Napi::Value Receive(const Napi::CallbackInfo& info) {
  auto& broker = Broker();
  std::lock_guard<std::recursive_mutex> lock(broker.mutex);
  auto client = Get(info);
  napi_deferred deferred;
  auto promise = Promise(info.Env(), &deferred);
  if (client->receive) {
    Reject(info.Env(), deferred, "receive is not finished yet");
    return promise;
  }
  const bool pending = client->closing || client->closed || client->failure ||
    !client->responses.empty();
  client->receive = deferred;
  Ref(client->owner.lock());
  // The receiver thread cannot notice a zero deadline until its current
  // td_receive poll returns (up to 100 ms), so expire it here. Delivery still
  // goes through the thread-safe function: resolving synchronously would let
  // a `for (;;) await receive()` loop starve the event loop.
  client->timed_out = !pending && client->timeout == 0;
  if (pending || client->timed_out) {
    broker.Notify(client);
  } else {
    auto deadline = Clock::now() + std::chrono::duration_cast<Clock::duration>(std::chrono::duration<double>(client->timeout));
    client->timer = broker.deadlines.emplace(deadline, client);
    client->has_timer = true;
  }
  broker.cv.notify_all();
  return promise;
}
void Send(const Napi::CallbackInfo& info) {
  auto request = Request(info, 1);
  int id;
  {
    std::lock_guard<std::recursive_mutex> lock(Broker().mutex);
    id = Get(info, true)->id;
  }
  // td_send parses the JSON synchronously; keep the receiver able to route
  // meanwhile. A request racing with closure gets a TDLib error response for
  // a client that is no longer routed, which is harmless.
  TdLibLoader::td_send.load()(id, request.c_str());
}
Napi::Value Execute(const Napi::CallbackInfo& info) {
  RequireLoaded(info.Env());
  auto request = Request(info, 1);
  if (!info[0].IsNull() && !info[0].IsUndefined()) {
    std::lock_guard<std::recursive_mutex> lock(Broker().mutex);
    Get(info, true);
  }
  const char* response = TdLibLoader::td_execute.load()(request.c_str());
  return response ? Napi::String::New(info.Env(), response) : info.Env().Null();
}
Napi::Value Destroy(const Napi::CallbackInfo& info) {
  auto& broker = Broker();
  std::lock_guard<std::recursive_mutex> lock(broker.mutex);
  auto client = Get(info);
  napi_deferred deferred;
  auto promise = Promise(info.Env(), &deferred);
  if (client->close) {
    Reject(info.Env(), deferred, "Client is already closing");
    return promise;
  }
  client->close = deferred;
  Ref(client->owner.lock());
  broker.BeginClose(client);
  if (client->closed) broker.Notify(client);
  return promise;
}
} // namespace TdDispatcher
