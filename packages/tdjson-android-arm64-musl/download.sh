#!/usr/bin/env bash
set -euo pipefail
curl --fail --location --retry 3 --output 'libtdjson-arm64-musl.so.tmp' 'https://github.com/AlexXanderGrib/prebuilt-tdlib/releases/download/0.1.8.67-42e6a52/libtdjson-arm64-musl.so'
mv 'libtdjson-arm64-musl.so.tmp' 'libtdjson-arm64-musl.so'
