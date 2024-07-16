[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callProtocol$Input

# Type Alias: callProtocol$Input

> **callProtocol$Input**: `object`

Version of [callProtocol](callProtocol-1.md) for method parameters.

Specifies the supported call protocols

## Type declaration

### \_

> `readonly` **\_**: `"callProtocol"`

### library\_versions?

> `readonly` `optional` **library\_versions**: [`vector$Input`](vector$Input.md)\<`string`\>

List of supported tgcalls versions

### max\_layer?

> `readonly` `optional` **max\_layer**: [`int32`](int32-1.md)

The maximum supported API layer; use 92

### min\_layer?

> `readonly` `optional` **min\_layer**: [`int32`](int32-1.md)

The minimum supported API layer; use 65

### udp\_p2p?

> `readonly` `optional` **udp\_p2p**: [`Bool$Input`](Bool$Input.md)

True, if UDP peer-to-peer connections are supported

### udp\_reflector?

> `readonly` `optional` **udp\_reflector**: [`Bool$Input`](Bool$Input.md)

True, if connection through UDP reflectors is supported

## Defined in

dist/generated/types.d.ts:34602
