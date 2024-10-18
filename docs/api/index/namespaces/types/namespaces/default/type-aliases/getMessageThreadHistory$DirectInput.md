[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageThreadHistory$DirectInput

# Type Alias: getMessageThreadHistory$DirectInput

> **getMessageThreadHistory$DirectInput**: `object`

Returns messages in a message thread of a message. Can be used only if messageProperties.can_get_message_thread == true. Message thread of a channel message is in the channel's linked supergroup.

- The messages are returned in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

## Type declaration

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

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier, which thread history needs to be returned

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages

## Defined in

dist/generated/types.d.ts:78192
