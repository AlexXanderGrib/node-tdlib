[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleChatIsPinned$Input

# Type Alias: toggleChatIsPinned$Input

> **toggleChatIsPinned$Input**: `object`

Changes the pinned state of a chat. There can be up to getOption("pinned_chat_count_max")/getOption("pinned_archived_chat_count_max") pinned non-secret chats and the same number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium

## Type declaration

### \_

> `readonly` **\_**: `"toggleChatIsPinned"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md)

Chat list in which to change the pinned state of the chat

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the chat; pass false to unpin it

## Defined in

dist/generated/types.d.ts:89309
