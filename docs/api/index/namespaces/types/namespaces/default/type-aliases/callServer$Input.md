[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callServer$Input

# Type Alias: callServer$Input

> **callServer$Input**: `object`

Version of [callServer](callServer.md) for method parameters.

Describes a server for relaying call data

## Type declaration

### \_

> `readonly` **\_**: `"callServer"`

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Server identifier

### ip\_address?

> `readonly` `optional` **ip\_address**: `string`

Server IPv4 address

### ipv6\_address?

> `readonly` `optional` **ipv6\_address**: `string`

Server IPv6 address

### port?

> `readonly` `optional` **port**: [`int32`](int32.md)

Server port number

### type?

> `readonly` `optional` **type**: [`CallServerType$Input`](CallServerType$Input.md)

Server type

## Defined in

dist/generated/types.d.ts:36124
