[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatOnlineMemberCount

# Type Alias: updateChatOnlineMemberCount

> **updateChatOnlineMemberCount**: `object`

The number of online group members has changed. This update with non-zero number of online group members is sent only for currently opened chats.

- There is no guarantee that it is sent just after the number of online users has changed

## Type declaration

### \_

> **\_**: `"updateChatOnlineMemberCount"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### online\_member\_count

> **online\_member\_count**: [`int32`](int32.md)

New number of online members in the chat, or 0 if unknown

## Defined in

dist/generated/types.d.ts:56025
