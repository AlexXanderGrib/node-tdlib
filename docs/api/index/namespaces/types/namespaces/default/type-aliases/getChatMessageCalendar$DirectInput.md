[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatMessageCalendar$DirectInput

# Type Alias: getChatMessageCalendar$DirectInput

> **getChatMessageCalendar$DirectInput**: `object`

Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the value of the option "utc_time_offset"

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat in which to return information about messages

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md)

Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention, searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53-1.md)

The message identifier from which to return information about messages; use 0 to get results from the last message

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

If not0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all messages, or for chats other than Saved Messages

## Defined in

dist/generated/types.d.ts:77282
