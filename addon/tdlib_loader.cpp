#include "tdlib_loader.h"
#include <mutex>
#include <memory>

#if defined(WIN32) || defined(_WIN32) || defined(__WIN32__)
#  include "win32-dlfcn.h"
#else
#  include <dlfcn.h>
#endif

#ifdef RTLD_DEEPBIND
#  pragma message("Using RTLD_DEEPBIND")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_NOW | RTLD_LOCAL | RTLD_DEEPBIND)
#else
#  pragma message("Using standard dlopen")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_NOW | RTLD_LOCAL)
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
  static std::recursive_mutex loader_mutex;
  static std::atomic<bool> loaded{false};
  static std::string loaded_path;
  static size_t active_resources = 0;
  static bool client_id_created = false;

  std::recursive_mutex& Mutex() { return loader_mutex; }
  void RetainResource() {
    std::lock_guard<std::recursive_mutex> lock(loader_mutex);
    ++active_resources;
  }
  void ReleaseResource() {
    std::lock_guard<std::recursive_mutex> lock(loader_mutex);
    --active_resources;
  }
  void MarkClientIdCreated() { client_id_created = true; }

  bool IsTdLoaded() {
    return loaded.load();
  }

  bool LoadTdJsonDynamic(const std::string& library_path, std::string& error_msg) {
    std::lock_guard<std::recursive_mutex> lock(loader_mutex);
    
    // Check if already loaded
    if (IsTdLoaded()) {
      if (loaded_path == library_path) return true;
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
    
    auto close_library = [](void* library) { dlclose(library); };
    std::unique_ptr<void, decltype(close_library)> handle_owner(handle, close_library);

    // Resolve every symbol before publishing any function pointers.
    #define SAFE_LOAD_FUNC(F) \
      F##_t F##_loaded; \
      do { \
        dlerror(); \
        F##_t func = reinterpret_cast<F##_t>(dlsym(handle, #F)); \
        char *dlsym_err_cstr = dlerror(); \
        if (dlsym_err_cstr != nullptr || func == nullptr) { \
          std::string dlsym_err(dlsym_err_cstr == nullptr ? "Function not found" : dlsym_err_cstr); \
          error_msg = "Failed to get " #F ": " + dlsym_err; \
          return false; \
        } \
        F##_loaded = func; \
      } while(0)
    
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
    
    #undef SAFE_LOAD_FUNC
    
    loaded_path = library_path;
    td_json_client_create.store(td_json_client_create_loaded);
    td_json_client_send.store(td_json_client_send_loaded);
    td_json_client_receive.store(td_json_client_receive_loaded);
    td_json_client_execute.store(td_json_client_execute_loaded);
    td_json_client_destroy.store(td_json_client_destroy_loaded);
    td_create_client_id.store(td_create_client_id_loaded);
    td_send.store(td_send_loaded);
    td_receive.store(td_receive_loaded);
    td_execute.store(td_execute_loaded);
    td_set_log_message_callback.store(td_set_log_message_callback_loaded);
    library_handle.store(handle_owner.release());
    loaded.store(true);
    return true;
  }

  bool UnloadTdJson(std::string& error_msg) {
    std::lock_guard<std::recursive_mutex> lock(loader_mutex);
    
    if (client_id_created) {
      error_msg = "Cannot unload TDLib after creating modern client IDs; TDLib manages their lifetime";
      return false;
    }
    if (active_resources != 0) {
      error_msg = "Cannot unload TDLib while clients, receive workers, or log callbacks are active";
      return false;
    }
    loaded.store(false);
    loaded_path.clear();

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
    if (handle != nullptr) {
      dlclose(handle);
      library_handle.store(nullptr);
    }
    return true;
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
    if (library_file.empty() || library_file.find('\0') != std::string::npos) {
      Napi::TypeError::New(env, "Expected a nonempty library path without NUL characters").ThrowAsJavaScriptException();
      return Napi::Value();
    }
    std::string error_msg;
    
    bool success = LoadTdJsonDynamic(library_file, error_msg);
    
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
    std::string error_msg;
    if (!UnloadTdJson(error_msg)) {
      Napi::Error::New(info.Env(), error_msg).ThrowAsJavaScriptException();
    }
  }

  Napi::Value GetLoadingMode(const Napi::CallbackInfo& info) {
    return Napi::String::New(info.Env(), "dynamic");
  }
}
