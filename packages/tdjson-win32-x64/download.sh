#!/usr/bin/env bash
set -euo pipefail
curl --fail --location --retry 3 --output 'tdjson-x64.dll.tmp' 'https://github.com/AlexXanderGrib/prebuilt-tdlib/releases/download/0.1.8.67-42e6a52/tdjson-x64.dll'
mv 'tdjson-x64.dll.tmp' 'tdjson-x64.dll'
