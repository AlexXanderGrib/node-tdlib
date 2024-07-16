[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPosition

# Type Alias: chatPosition

> **chatPosition**: `object`

Describes a position of a chat in a chat list

## Type declaration

### \_

> **\_**: `"chatPosition"`

### is\_pinned

> **is\_pinned**: [`Bool`](Bool.md)

True, if the chat is pinned in the chat list

### list

> **list**: [`ChatList`](ChatList.md)

The chat list

### order

> **order**: [`int64`](int64-1.md)

A parameter used to determine order of the chat in the chat list. Chats must be sorted by the pair (order, chat.id) in descending order

### source

> **source**: [`ChatSource`](ChatSource.md) \| `null`

Source of the chat in the chat list; may be null

## Defined in

dist/generated/types.d.ts:16009
