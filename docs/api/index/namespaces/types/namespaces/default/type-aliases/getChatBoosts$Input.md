[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatBoosts$Input

# Type Alias: getChatBoosts$Input

> **getChatBoosts$Input**: `object`

Returns the list of boosts applied to a chat; requires administrator rights in the chat

## Type declaration

### \_

> `readonly` **\_**: `"getChatBoosts"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of boosts to be returned; up to 100. For optimal performance, the number of returned boosts can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### only\_gift\_codes?

> `readonly` `optional` **only\_gift\_codes**: [`Bool$Input`](Bool$Input.md)

Pass true to receive only boosts received from gift codes and giveaways created by the chat

## Defined in

dist/generated/types.d.ts:90841
