[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchMessages$Input

# Type Alias: searchMessages$Input

> **searchMessages$Input**: `object`

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)).

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### \_

> `readonly` **\_**: `"searchMessages"`

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md) \| `null`

Chat list in which to search messages; pass null to search in all chats regardless of their chat list. Only Main and Archive chat lists are supported

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md) \| `null`

Additional filter for messages to search; pass null to search for all messages. Filters searchMessagesFilterMention, searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, searchMessagesFilterFailedToSend, and searchMessagesFilterPinned are unsupported in this function

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### max\_date?

> `readonly` `optional` **max\_date**: [`int32`](int32-1.md)

If not 0, the maximum date of the messages to return

### min\_date?

> `readonly` `optional` **min\_date**: [`int32`](int32-1.md)

If not 0, the minimum date of the messages to return

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### only\_in\_channels?

> `readonly` `optional` **only\_in\_channels**: [`Bool$Input`](Bool$Input.md)

Pass true to search only for messages in channels

### query?

> `readonly` `optional` **query**: `string`

Query to search for

## Defined in

dist/generated/types.d.ts:76415
