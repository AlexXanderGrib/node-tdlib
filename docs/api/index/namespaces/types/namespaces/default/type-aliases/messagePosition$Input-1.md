[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePosition$Input

# Type Alias: messagePosition$Input

> **messagePosition$Input**: `object`

Version of [messagePosition](messagePosition-1.md) for method parameters.

Contains information about a message in a specific position

## Type declaration

### \_

> `readonly` **\_**: `"messagePosition"`

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was sent

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

### position?

> `readonly` `optional` **position**: [`int32`](int32-1.md)

0-based message position in the full list of suitable messages

## Defined in

dist/generated/types.d.ts:14030
