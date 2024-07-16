[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatOnlineMemberCount$Input

# Type Alias: updateChatOnlineMemberCount$Input

> **updateChatOnlineMemberCount$Input**: `object`

Version of [updateChatOnlineMemberCount](updateChatOnlineMemberCount.md) for method parameters.

The number of online group members has changed. This update with non-zero number of online group members is sent only for currently opened chats.

- There is no guarantee that it is sent just after the number of online users has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatOnlineMemberCount"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### online\_member\_count?

> `readonly` `optional` **online\_member\_count**: [`int32`](int32-1.md)

New number of online members in the chat, or 0 if unknown

## Defined in

dist/generated/types.d.ts:54429
