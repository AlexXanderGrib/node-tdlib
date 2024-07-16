[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / saveApplicationLogEvent$Input

# Type Alias: saveApplicationLogEvent$Input

> **saveApplicationLogEvent$Input**: `object`

Saves application log event on the server. Can be called before authorization

## Type declaration

### \_

> `readonly` **\_**: `"saveApplicationLogEvent"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Optional chat identifier, associated with the event

### data?

> `readonly` `optional` **data**: [`JsonValue$Input`](JsonValue$Input.md)

The log event data

### type?

> `readonly` `optional` **type**: `string`

Event type

## Defined in

dist/generated/types.d.ts:101321
