[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatHistory$Input

# Type Alias: getChatHistory$Input

> **getChatHistory$Input**: `object`

Returns messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id).

- For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if only_local is true

## Type declaration

### \_

> `readonly` **\_**: `"getChatHistory"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53.md)

Identifier of the message starting from which history must be fetched; use 0 to get results from the last message

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset.

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages

### only\_local?

> `readonly` `optional` **only\_local**: [`Bool$Input`](Bool$Input.md)

Pass true to get only messages that are available without sending network requests

## Defined in

dist/generated/types.d.ts:78079
