[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundChatMessages$Input

# Type Alias: foundChatMessages$Input

> **foundChatMessages$Input**: `object`

Version of [foundChatMessages](foundChatMessages-1.md) for method parameters.

Contains a list of messages found by a search in a given chat

## Type declaration

### \_

> `readonly` **\_**: `"foundChatMessages"`

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`message$Input`](message$Input-1.md)\>

List of messages

### next\_from\_message\_id?

> `readonly` `optional` **next\_from\_message\_id**: [`int53`](int53-1.md)

The offset for the next request. If 0, there are no more results

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of messages found; -1 if unknown

## Defined in

dist/generated/types.d.ts:13986
