[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatMessageCount$DirectInput

# Type Alias: getChatMessageCount$DirectInput

> **getChatMessageCount$DirectInput**: `object`

Returns approximate number of messages of the specified type in the chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat in which to count messages

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md)

Filter for message content; searchMessagesFilterEmpty is unsupported in this function

### return\_local?

> `readonly` `optional` **return\_local**: [`Bool$Input`](Bool$Input.md)

Pass true to get the number of messages without sending network requests, or -1 if the number of messages is unknown locally

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

If not 0, only messages in the specified Saved Messages topic will be counted; pass 0 to count all messages, or for chats other than Saved Messages

## Defined in

dist/generated/types.d.ts:79349
