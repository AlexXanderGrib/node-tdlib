#!/usr/bin/env bash
set -euo pipefail
curl --fail --location --retry 3 --output 'libtdjson-arm64.dylib.tmp' 'https://github.com/AlexXanderGrib/prebuilt-tdlib/releases/download/0.1.8.70-c8828d5/libtdjson-arm64.dylib'
mv 'libtdjson-arm64.dylib.tmp' 'libtdjson-arm64.dylib'
