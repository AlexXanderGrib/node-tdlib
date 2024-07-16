[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateUnreadChatCount

# Type Alias: updateUnreadChatCount

> **updateUnreadChatCount**: `object`

Number of unread chats, i.e. with unread messages or marked as unread, has changed. This update is sent only if the message database is used

## Type declaration

### \_

> **\_**: `"updateUnreadChatCount"`

### chat\_list

> **chat\_list**: [`ChatList`](ChatList.md)

The chat list with changed number of unread messages

### marked\_as\_unread\_count

> **marked\_as\_unread\_count**: [`int32`](int32-1.md)

Total number of chats marked as unread

### marked\_as\_unread\_unmuted\_count

> **marked\_as\_unread\_unmuted\_count**: [`int32`](int32-1.md)

Total number of unmuted chats marked as unread

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Approximate total number of chats in the chat list

### unread\_count

> **unread\_count**: [`int32`](int32-1.md)

Total number of unread chats

### unread\_unmuted\_count

> **unread\_unmuted\_count**: [`int32`](int32-1.md)

Total number of unread unmuted chats

## Defined in

dist/generated/types.d.ts:55765
