#pragma once

#include <napi.h>
#include <atomic>
#include <string>

// Type definitions for TDLib functions
typedef void * (*td_json_client_create_t)();
typedef void (*td_json_client_send_t)(void *client, const char *request);
typedef const char * (*td_json_client_receive_t)(void *client, double timeout);
typedef const char * (*td_json_client_execute_t)(void *client, const char *request);
typedef void (*td_json_client_destroy_t)(void *client);

// New tdjson interface
typedef int (*td_create_client_id_t)();
typedef void (*td_send_t)(int client_id, const char *request);
typedef const char * (*td_receive_t)(double timeout);
typedef const char * (*td_execute_t)(const char *request);

typedef void (*td_log_message_callback_ptr)(int verbosity_level, const char *message);
typedef void (*td_set_log_message_callback_t)(int max_verbosity_level, td_log_message_callback_ptr callback);

namespace TdLibLoader {
  // Thread-safe function pointers with atomic initialization
  extern std::atomic<td_json_client_create_t> td_json_client_create;
  extern std::atomic<td_json_client_send_t> td_json_client_send;
  extern std::atomic<td_json_client_receive_t> td_json_client_receive;
  extern std::atomic<td_json_client_execute_t> td_json_client_execute;
  extern std::atomic<td_json_client_destroy_t> td_json_client_destroy;
  extern std::atomic<td_create_client_id_t> td_create_client_id;
  extern std::atomic<td_send_t> td_send;
  extern std::atomic<td_receive_t> td_receive;
  extern std::atomic<td_execute_t> td_execute;
  extern std::atomic<td_set_log_message_callback_t> td_set_log_message_callback;

  enum class LoadingMode {
    STATIC,
    DYNAMIC
  };

  // Check if TDLib is loaded
  bool IsTdLoaded();
  
  // Load TDLib dynamically from shared library
  bool LoadTdJsonDynamic(const std::string& library_path, std::string& error_msg);
  
  // Load TDLib statically (link-time)
  bool LoadTdJsonStatic(std::string& error_msg);
  
  // Unload TDLib (only works for dynamic loading)
  void UnloadTdJson();
  
  // Get current loading mode
  LoadingMode GetLoadingMode();
  
  // N-API wrapper functions
  Napi::Value LoadTdJsonDynamic(const Napi::CallbackInfo& info);
  Napi::Value LoadTdJsonStatic(const Napi::CallbackInfo& info);
  Napi::Value IsTdLoaded(const Napi::CallbackInfo& info);
  void UnloadTdJson(const Napi::CallbackInfo& info);
  Napi::Value GetLoadingMode(const Napi::CallbackInfo& info);
}