#!/bin/sh

. /etc/os-release

echo $ID;

if [ "$ID" = "alpine" ]; then
  apk add --update --no-cache python3 py3-pip && ln -sf python3 /usr/bin/python
  python3 -m ensurepip  
  npm ci
  TDLIB_PATH=$(readlink -f ./packages/tdjson-linux-arm64-glibc/libtdjson-arm64-musl.so) npm test -- --run
else
  npm ci
  TDLIB_PATH=$(readlink -f ./packages/tdjson-linux-arm64-glibc/libtdjson-arm64-glibc.so) npm test -- --run
fi

