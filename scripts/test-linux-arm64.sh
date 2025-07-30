#!/bin/sh

. /etc/os-release

echo $ID;

export TBM_PLATFORM=linux
export TBM_ARCH=arm64
  

if [ "$ID" = "alpine" ]; then
  apk add --update --no-cache python3 py3-pip g++ make py3-pip && ln -sf python3 /usr/bin/python
  npm ci
  export TBM_LIBC=musl

else
  npm ci
  export TBM_LIBC=glibc
fi

export TDLIB_PATH=$(node ./scripts/test-binary-module.js)
echo $TDLIB_PATH

npm test -- --run
