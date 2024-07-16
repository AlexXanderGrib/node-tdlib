[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatMessagePosition$DirectInput

# Type Alias: getChatMessagePosition$DirectInput

> **getChatMessagePosition$DirectInput**: `object`

Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the chat. Cannot be used in secret chats

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat in which to find message position

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md)

Filter for message content; searchMessagesFilterEmpty, searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, and searchMessagesFilterFailedToSend are unsupported in this function

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If not 0, only messages in the specified thread will be considered; supergroups only

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

If not 0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all relevant messages, or for chats other than Saved Messages

## Defined in

dist/generated/types.d.ts:77403
