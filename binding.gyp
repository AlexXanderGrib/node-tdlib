{
    "targets": [
        {
            "target_name": "td",
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
            "sources": [
                "addon/td.cpp",
                "addon/tdlib_loader.cpp"
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "conditions": [
                ["OS=='win'", {
                    "sources": [
                        "addon/win32-dlfcn.cpp"
                    ]
                }],
                ["enable_static_tdlib=='true'", {
                    "defines": ["TDLIB_STATIC_LINK=1"],
                    "libraries": [
                        "<(tdlib_library_file)"
                    ]
                }]
            ]
        }
    ],
    "variables": {
        "enable_static_tdlib%": "false",
        "tdlib_library_file%": "<!(echo ${TDLIB_LIBRARY_FILE:-})"
    }
}
