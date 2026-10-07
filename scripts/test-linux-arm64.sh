#!/bin/sh
set -eu

. /etc/os-release

echo $ID;

export TDN_PLATFORM=linux
export TDN_ARCH=arm64
  

if [ "$ID" = "alpine" ]; then
  apk add --update --no-cache python3 py3-pip g++ make py3-pip && ln -sf python3 /usr/bin/python
  npm ci
  export TDN_LIBC=musl

else
  npm ci
  export TDN_LIBC=glibc
fi

TDLIB_PATH=$(node ./scripts/test-binary-module.js)
export TDLIB_PATH
echo $TDLIB_PATH

npm test -- --run
