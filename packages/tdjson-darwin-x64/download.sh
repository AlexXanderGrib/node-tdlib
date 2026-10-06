#!/usr/bin/env bash
set -euo pipefail
curl --fail --location --retry 3 --output 'libtdjson-x64.dylib.tmp' 'https://github.com/AlexXanderGrib/prebuilt-tdlib/releases/download/0.1.8.67-42e6a52/libtdjson-x64.dylib'
mv 'libtdjson-x64.dylib.tmp' 'libtdjson-x64.dylib'
