// Deterministic TDLib ABI fixture. Abort on lifetime/concurrency violations.
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstdlib>
#include <deque>
#include <mutex>
#include <string>

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

extern "C" {
void* td_json_client_create() { ++clients; return new Client; }
#ifndef MISSING_SYMBOL
void td_json_client_send(void* raw, const char* request) {
  auto* client = static_cast<Client*>(raw);
  std::lock_guard<std::mutex> lock(client->mutex);
  client->queue.emplace_back(request);
  client->cv.notify_one();
}
const char* td_json_client_receive(void* raw, double timeout) {
  auto* client = static_cast<Client*>(raw);
  if (++client->receiving != 1) std::abort();
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
const char* td_execute(const char* request) {
  std::string command(request);
  if (command == "stats") {
    result = "{\"clients\":" + std::to_string(clients.load()) +
      ",\"receives\":" + std::to_string(receives.load()) + "}";
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
const char* td_json_client_execute(void*, const char* request) { return td_execute(request); }
void td_json_client_destroy(void* raw) {
  auto* client = static_cast<Client*>(raw);
  if (client->receiving != 0) std::abort();
  delete client;
  --clients;
}
int td_create_client_id() { return 1; }
void td_send(int, const char* request) { td_json_client_send(&modern, request); }
const char* td_receive(double timeout) { return td_json_client_receive(&modern, timeout); }
void td_set_log_message_callback(int, void (*callback)(int, const char*)) {
  log_callback = callback;
  // Registration can synchronously emit a message: catch callback mutex deadlocks.
#ifndef NO_REGISTRATION_LOG
  if (callback) callback(2, "registered");
#endif
}
#endif
}
