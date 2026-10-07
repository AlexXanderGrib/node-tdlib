// Deterministic TDLib ABI fixture. Abort on lifetime/concurrency violations.
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstdlib>
#include <deque>
#include <mutex>
#include <string>
#include <unordered_set>
#include "../../addon/json_envelope.h"

struct Client {
  std::mutex mutex;
  std::condition_variable cv;
  std::deque<std::string> queue;
  std::atomic<int> receiving{0};
};
static Client modern;
static std::atomic<int> clients{0};
static std::atomic<int> receives{0};
static void (*log_callback)(int, const char*) = nullptr;
static thread_local std::string result;
static std::mutex managed_mutex;
static std::unordered_set<int> managed_clients;
static std::unordered_set<int> delayed_clients;
static std::unordered_set<int> delayed_closes;
static int next_id = 1;
static std::atomic<int> modern_peak{0};

static void SendClient(Client* client, std::string request) {
  std::lock_guard<std::mutex> lock(client->mutex);
  client->queue.emplace_back(std::move(request));
  client->cv.notify_one();
}
static const char* ReceiveClient(Client* client, double timeout) {
  int count = ++client->receiving;
  if (count != 1) std::abort();
  if (client == &modern) modern_peak.store(1);
  ++receives;
  std::unique_lock<std::mutex> lock(client->mutex);
  client->cv.wait_for(lock, std::chrono::duration<double>(timeout),
    [client] { return !client->queue.empty(); });
  const char* response = nullptr;
  if (!client->queue.empty()) {
    result = std::move(client->queue.front());
    client->queue.pop_front();
    response = result.c_str();
  }
  --client->receiving;
  return response;
}
static std::string Tagged(int id, std::string json) {
  if (json.empty() || json.front() != '{' || json.back() != '}') return json;
  json.pop_back();
  if (json.size() > 1) json += ',';
  return json + "\"@client_id\":" + std::to_string(id) + "}";
}
static void Closed(int id) {
  managed_clients.erase(id);
  SendClient(&modern, Tagged(id, "{\"@type\":\"updateAuthorizationState\",\"authorization_state\":{\"@type\":\"authorizationStateClosed\"}}"));
}

extern "C" {
#ifndef MODERN_ONLY
void* td_json_client_create() { ++clients; return new Client; }
#endif
#ifndef MISSING_SYMBOL
#ifndef MODERN_ONLY
void td_json_client_send(void* raw, const char* request) {
  SendClient(static_cast<Client*>(raw), request);
}
const char* td_json_client_receive(void* raw, double timeout) {
  return ReceiveClient(static_cast<Client*>(raw), timeout);
}
#endif
const char* td_execute(const char* request) {
  std::string command(request);
  if (command == "stats") {
    std::lock_guard<std::mutex> lock(managed_mutex);
    result = "{\"clients\":" + std::to_string(clients.load()) +
      ",\"receives\":" + std::to_string(receives.load()) +
      ",\"managedClients\":" + std::to_string(managed_clients.size()) +
      ",\"modernReceivePeak\":" + std::to_string(modern_peak.load()) + "}";
  } else if (command == "releaseClose") {
    std::lock_guard<std::mutex> lock(managed_mutex);
    for (int id : delayed_closes) Closed(id);
    delayed_closes.clear();
    result = "{}";
  } else if (command == "large") {
    result = "{\"value\":\"" + std::string(2 * 1024 * 1024, 'x') + "\"}";
  } else if (command == "flood") {
    std::string message(32 * 1024, 'x');
    for (int i = 0; i < 10000; ++i) if (log_callback) log_callback(3, message.c_str());
    result = "{}";
  } else if (command == "null") {
    return nullptr;
  } else {
    result = command;
  }
  return result.c_str();
}
#ifndef MODERN_ONLY
const char* td_json_client_execute(void*, const char* request) { return td_execute(request); }
void td_json_client_destroy(void* raw) {
  auto* client = static_cast<Client*>(raw);
  if (client->receiving != 0) std::abort();
  delete client;
  --clients;
}
#endif
int td_create_client_id() {
  std::lock_guard<std::mutex> lock(managed_mutex);
  int id = next_id++;
  managed_clients.insert(id);
  return id;
}
void td_send(int id, const char* request) {
  std::lock_guard<std::mutex> lock(managed_mutex);
  auto type = TdJsonEnvelope::Member(request, "@type");
  if (type == "\"close\"") {
    SendClient(&modern, Tagged(id, "{\"@type\":\"ok\"}"));
    if (delayed_clients.count(id)) delayed_closes.insert(id);
    else Closed(id);
  } else if (type == "\"fixtureFlood\"" ||
      (type == "\"getOption\"" && TdJsonEnvelope::Member(request, "name") == "\"fixtureFlood\"")) {
    for (int i = 0; i < 2000; i++) SendClient(&modern, Tagged(id, "{\"value\":\"flood\"}"));
  } else {
    if (type == "\"fixtureDelayClose\"") delayed_clients.insert(id);
    SendClient(&modern, Tagged(id, request));
  }
}
const char* td_receive(double timeout) { return ReceiveClient(&modern, timeout); }
void td_set_log_message_callback(int, void (*callback)(int, const char*)) {
  log_callback = callback;
  // Registration can synchronously emit a message: catch callback mutex deadlocks.
#ifndef NO_REGISTRATION_LOG
  if (callback) callback(2, "registered");
#endif
}
#endif
}
