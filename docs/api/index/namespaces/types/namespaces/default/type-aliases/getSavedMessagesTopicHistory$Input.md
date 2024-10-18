[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getSavedMessagesTopicHistory$Input

# Type Alias: getSavedMessagesTopicHistory$Input

> **getSavedMessagesTopicHistory$Input**: `object`

Returns messages in a Saved Messages topic. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)

## Type declaration

### \_

> `readonly` **\_**: `"getSavedMessagesTopicHistory"`

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53.md)

Identifier of the message starting from which messages must be fetched; use 0 to get results from the last message

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset.

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of Saved Messages topic which messages will be fetched

## Defined in

dist/generated/types.d.ts:77787
