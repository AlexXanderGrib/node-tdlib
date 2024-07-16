[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallStream

# Type Alias: groupCallStream

> **groupCallStream**: `object`

Describes an available stream in a group call

## Type declaration

### \_

> **\_**: `"groupCallStream"`

### channel\_id

> **channel\_id**: [`int32`](int32-1.md)

Identifier of an audio/video channel

### scale

> **scale**: [`int32`](int32-1.md)

Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds

### time\_offset

> **time\_offset**: [`int53`](int53-1.md)

Point in time when the stream currently ends; Unix timestamp in milliseconds

## Defined in

dist/generated/types.d.ts:35099
