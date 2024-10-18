#!/usr/bin/env bash

npm ci
TDLIB_PATH=$(readlink -f ./packages/tdjson-linux-arm64-glibc/libtdjson-arm64-glibc.so) npm test -- --run