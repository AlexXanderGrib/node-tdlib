{
  "targets": [
    {
      "target_name": "td",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "sources": ["addon/td.cpp", "addon/tdlib_loader.cpp", "addon/td_dispatcher.cpp"],
      "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
      "dependencies": ["<!(node -p \"require('node-addon-api').gyp\")"],
      "defines": [
        "NAPI_CPP_EXCEPTIONS",
        "NODE_ADDON_API_CPP_EXCEPTIONS_ALL",
        "NAPI_VERSION=6"
      ],
      "conditions": [
        [
          "OS=='win'",
          {
            "sources": ["addon/win32-dlfcn.cpp"]
          }
        ]
      ],
      "xcode_settings": {
        "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
        "CLANG_CXX_LANGUAGE_STANDARD": "c++17"
      },
      "msvs_settings": {
        "VCCLCompilerTool": {
          "ExceptionHandling": 1,
          "AdditionalOptions": ["/std:c++17"]
        }
      },
      "cflags_cc": ["-std=c++17"]
    }
  ]
}
