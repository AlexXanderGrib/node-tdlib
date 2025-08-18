#include "tdlib_loader.h"
#include <mutex>

#if defined(WIN32) || defined(_WIN32) || defined(__WIN32__)
#  include "win32-dlfcn.h"
#else
#  include <dlfcn.h>
#endif

#ifdef RTLD_DEEPBIND
#  pragma message("Using RTLD_DEEPBIND")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL | RTLD_DEEPBIND)
#else
#  pragma message("Using standard dlopen")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL)
#endif

// For static linking, declare external functions
#ifdef TDLIB_STATIC_LINK
extern "C" {
  void *td_json_client_create();
  void td_json_client_send(void *client, const char *request);
  const char *td_json_client_receive(void *client, double timeout);
  const char *td_json_client_execute(void *client, const char *request);
  void td_json_client_destroy(void *client);
  int td_create_client_id();
  void td_send(int client_id, const char *request);
  const char *td_receive(double timeout);
  const char *td_execute(const char *request);
  void td_set_log_message_callback(int max_verbosity_level, td_log_message_callback_ptr callback);
}
#endif

namespace TdLibLoader {
  // Thread-safe function pointers with atomic initialization
  std::atomic<td_json_client_create_t> td_json_client_create{nullptr};
  std::atomic<td_json_client_send_t> td_json_client_send{nullptr};
  std::atomic<td_json_client_receive_t> td_json_client_receive{nullptr};
  std::atomic<td_json_client_execute_t> td_json_client_execute{nullptr};
  std::atomic<td_json_client_destroy_t> td_json_client_destroy{nullptr};
  std::atomic<td_create_client_id_t> td_create_client_id{nullptr};
  std::atomic<td_send_t> td_send{nullptr};
  std::atomic<td_receive_t> td_receive{nullptr};
  std::atomic<td_execute_t> td_execute{nullptr};
  std::atomic<td_set_log_message_callback_t> td_set_log_message_callback{nullptr};

  // Internal state
  static std::atomic<void*> library_handle{nullptr};
  static std::atomic<LoadingMode> current_mode{LoadingMode::DYNAMIC};
  static std::mutex loader_mutex;

  bool IsTdLoaded() {
    return td_create_client_id.load() != nullptr && 
           td_json_client_create.load() != nullptr;
  }

  bool LoadTdJsonDynamic(const std::string& library_path, std::string& error_msg) {
    std::lock_guard<std::mutex> lock(loader_mutex);
    
    // Check if already loaded
    if (IsTdLoaded()) {
      error_msg = "TDLib is already loaded";
      return false;
    }

    dlerror(); // Clear errors
    void *handle = DLOPEN(library_path.c_str());
    char *dlopen_err_cstr = dlerror();
    
    if (handle == nullptr) {
      error_msg = std::string("Dynamic Loading Error: ") + 
                  (dlopen_err_cstr == nullptr ? "Unknown error" : dlopen_err_cstr);
      return false;
    }
    
    // Macro for safe function loading
    #define SAFE_LOAD_FUNC(F) \
      do { \
        F##_t func = (F##_t) dlsym(handle, #F); \
        char *dlsym_err_cstr = dlerror(); \
        if (dlsym_err_cstr != nullptr || func == nullptr) { \
          std::string dlsym_err(dlsym_err_cstr == nullptr ? "Function not found" : dlsym_err_cstr); \
          dlclose(handle); \
          error_msg = "Failed to get " #F ": " + dlsym_err; \
          return false; \
        } \
        F.store(func); \
      } while(0)
    
    // Load all function pointers
    try {
      SAFE_LOAD_FUNC(td_json_client_create);
      SAFE_LOAD_FUNC(td_json_client_send);
      SAFE_LOAD_FUNC(td_json_client_receive);
      SAFE_LOAD_FUNC(td_json_client_execute);
      SAFE_LOAD_FUNC(td_json_client_destroy);
      SAFE_LOAD_FUNC(td_create_client_id);
      SAFE_LOAD_FUNC(td_send);
      SAFE_LOAD_FUNC(td_receive);
      SAFE_LOAD_FUNC(td_execute);
      SAFE_LOAD_FUNC(td_set_log_message_callback);
    } catch (const std::exception& e) {
      dlclose(handle);
      error_msg = std::string("Exception during function loading: ") + e.what();
      return false;
    }
    
    #undef SAFE_LOAD_FUNC
    
    library_handle.store(handle);
    current_mode.store(LoadingMode::DYNAMIC);
    return true;
  }

  bool LoadTdJsonStatic(std::string& error_msg) {
    std::lock_guard<std::mutex> lock(loader_mutex);
    
    // Check if already loaded
    if (IsTdLoaded()) {
      error_msg = "TDLib is already loaded";
      return false;
    }
    
    #ifdef TDLIB_STATIC_LINK
    try {
      // Load static function pointers
      td_json_client_create.store(&::td_json_client_create);
      td_json_client_send.store(&::td_json_client_send);
      td_json_client_receive.store(&::td_json_client_receive);
      td_json_client_execute.store(&::td_json_client_execute);
      td_json_client_destroy.store(&::td_json_client_destroy);
      td_create_client_id.store(&::td_create_client_id);
      td_send.store(&::td_send);
      td_receive.store(&::td_receive);
      td_execute.store(&::td_execute);
      td_set_log_message_callback.store(&::td_set_log_message_callback);
      
      current_mode.store(LoadingMode::STATIC);
      return true;
    } catch (const std::exception& e) {
      error_msg = std::string("Exception during static loading: ") + e.what();
      return false;
    }
    #else
    error_msg = "Static linking is not enabled. Compile with TDLIB_STATIC_LINK defined.";
    return false;
    #endif
  }

  void UnloadTdJson() {
    std::lock_guard<std::mutex> lock(loader_mutex);
    
    // Clear function pointers
    td_json_client_create.store(nullptr);
    td_json_client_send.store(nullptr);
    td_json_client_receive.store(nullptr);
    td_json_client_execute.store(nullptr);
    td_json_client_destroy.store(nullptr);
    td_create_client_id.store(nullptr);
    td_send.store(nullptr);
    td_receive.store(nullptr);
    td_execute.store(nullptr);
    td_set_log_message_callback.store(nullptr);
    
    // Close dynamic library if loaded
    void* handle = library_handle.load();
    if (handle != nullptr && current_mode.load() == LoadingMode::DYNAMIC) {
      dlclose(handle);
      library_handle.store(nullptr);
    }
  }

  LoadingMode GetLoadingMode() {
    return current_mode.load();
  }

  // N-API wrapper functions
  Napi::Value LoadTdJsonDynamic(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    if (info.Length() < 1 || !info[0].IsString()) {
      auto error = Napi::TypeError::New(env, "Expected first argument to be a string");
      error.ThrowAsJavaScriptException();
      return Napi::Value();
    }
    
    std::string library_file = info[0].As<Napi::String>().Utf8Value();
    std::string error_msg;
    
    bool success = LoadTdJsonDynamic(library_file, error_msg);
    
    if (!success) {
      auto error = Napi::Error::New(env, error_msg);
      error.ThrowAsJavaScriptException();
      return Napi::Value();
    }
    
    return Napi::Boolean::New(env, true);
  }

  Napi::Value LoadTdJsonStatic(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    std::string error_msg;
    
    bool success = LoadTdJsonStatic(error_msg);
    
    if (!success) {
      auto error = Napi::Error::New(env, error_msg);
      error.ThrowAsJavaScriptException();
      return Napi::Value();
    }
    
    return Napi::Boolean::New(env, true);
  }

  Napi::Value IsTdLoaded(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    return Napi::Boolean::New(env, IsTdLoaded());
  }

  void UnloadTdJson(const Napi::CallbackInfo& info) {
    UnloadTdJson();
  }

  Napi::Value GetLoadingMode(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    LoadingMode mode = GetLoadingMode();
    return Napi::String::New(env, mode == LoadingMode::STATIC ? "static" : "dynamic");
  }
}