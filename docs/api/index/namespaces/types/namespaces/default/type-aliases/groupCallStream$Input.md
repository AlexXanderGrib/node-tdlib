[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallStream$Input

# Type Alias: groupCallStream$Input

> **groupCallStream$Input**: `object`

Version of [groupCallStream](groupCallStream.md) for method parameters.

Describes an available stream in a group call

## Type declaration

### \_

> `readonly` **\_**: `"groupCallStream"`

### channel\_id?

> `readonly` `optional` **channel\_id**: [`int32`](int32.md)

Identifier of an audio/video channel

### scale?

> `readonly` `optional` **scale**: [`int32`](int32.md)

Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds

### time\_offset?

> `readonly` `optional` **time\_offset**: [`int53`](int53.md)

Point in time when the stream currently ends; Unix timestamp in milliseconds

## Defined in

dist/generated/types.d.ts:36492
