[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPosition$Input

# Type Alias: chatPosition$Input

> **chatPosition$Input**: `object`

Version of [chatPosition](chatPosition-1.md) for method parameters.

Describes a position of a chat in a chat list

## Type declaration

### \_

> `readonly` **\_**: `"chatPosition"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the chat is pinned in the chat list

### list?

> `readonly` `optional` **list**: [`ChatList$Input`](ChatList$Input.md)

The chat list

### order?

> `readonly` `optional` **order**: [`int64$Input`](int64$Input-1.md)

A parameter used to determine order of the chat in the chat list. Chats must be sorted by the pair (order, chat.id) in descending order

### source?

> `readonly` `optional` **source**: [`ChatSource$Input`](ChatSource$Input.md) \| `null`

Source of the chat in the chat list; may be null

## Defined in

dist/generated/types.d.ts:16037
