[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundChatMessages

# Type Alias: foundChatMessages

> **foundChatMessages**: `object`

Contains a list of messages found by a search in a given chat

## Type declaration

### \_

> **\_**: `"foundChatMessages"`

### messages

> **messages**: [`vector`](vector.md)\<[`message`](message-1.md)\>

List of messages

### next\_from\_message\_id

> **next\_from\_message\_id**: [`int53`](int53-1.md)

The offset for the next request. If 0, there are no more results

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Approximate total number of messages found; -1 if unknown

## Defined in

dist/generated/types.d.ts:13963
