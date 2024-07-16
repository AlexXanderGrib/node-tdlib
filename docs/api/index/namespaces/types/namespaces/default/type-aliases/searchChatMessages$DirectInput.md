[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChatMessages$DirectInput

# Type Alias: searchChatMessages$DirectInput

> **searchChatMessages$DirectInput**: `object`

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query

- (searchSecretMessages must be used instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit.

- A combination of query, sender_id, filter and message_thread_id search criteria is expected to be supported, only if it is required for Telegram official application implementation

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat in which to search messages

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md) \| `null`

Additional filter for messages to search; pass null to search for all messages

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53-1.md)

Identifier of the message starting from which history must be fetched; use 0 to get results from the last message

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset.

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If not 0, only messages in the specified thread will be returned; supergroups only

### offset?

> `readonly` `optional` **offset**: [`int32`](int32-1.md)

Specify 0 to get results from exactly the message from_message_id or a negative offset to get the specified message and some newer messages

### query?

> `readonly` `optional` **query**: `string`

Query to search for

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

If not 0, only messages in the specified Saved Messages topic will be returned; pass 0 to return all messages, or for chats other than Saved Messages

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of the sender of messages to search for; pass null to search for messages from any sender. Not supported in secret chats

## Defined in

dist/generated/types.d.ts:76350
