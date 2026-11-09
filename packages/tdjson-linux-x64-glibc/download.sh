#!/usr/bin/env bash
set -euo pipefail
curl --fail --location --retry 3 --output 'libtdjson-x64-glibc.so.tmp' 'https://github.com/AlexXanderGrib/prebuilt-tdlib/releases/download/0.1.8.70-c8828d5/libtdjson-x64-glibc.so'
mv 'libtdjson-x64-glibc.so.tmp' 'libtdjson-x64-glibc.so'
