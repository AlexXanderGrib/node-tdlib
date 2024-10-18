[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatSparseMessagePositions$Input

# Type Alias: getChatSparseMessagePositions$Input

> **getChatSparseMessagePositions$Input**: `object`

Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id).

- Cannot be used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database

## Type declaration

### \_

> `readonly` **\_**: `"getChatSparseMessagePositions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat in which to return information about message positions

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md)

Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention, searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53.md)

The message identifier from which to return information about message positions

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The expected number of message positions to be returned; 50-2000. A smaller number of positions can be returned, if there are not enough appropriate messages

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

If not 0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all messages, or for chats other than Saved Messages

## Defined in

dist/generated/types.d.ts:79193
