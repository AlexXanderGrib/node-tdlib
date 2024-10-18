[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callProtocol

# Type Alias: callProtocol

> **callProtocol**: `object`

Specifies the supported call protocols

## Type declaration

### \_

> **\_**: `"callProtocol"`

### library\_versions

> **library\_versions**: [`vector`](vector.md)\<`string`\>

List of supported tgcalls versions

### max\_layer

> **max\_layer**: [`int32`](int32.md)

The maximum supported API layer; use 92

### min\_layer

> **min\_layer**: [`int32`](int32.md)

The minimum supported API layer; use 65

### udp\_p2p

> **udp\_p2p**: [`Bool`](Bool.md)

True, if UDP peer-to-peer connections are supported

### udp\_reflector

> **udp\_reflector**: [`Bool`](Bool.md)

True, if connection through UDP reflectors is supported

## Defined in

dist/generated/types.d.ts:35939
