[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateUnreadMessageCount

# Type Alias: updateUnreadMessageCount

> **updateUnreadMessageCount**: `object`

Number of unread messages in a chat list has changed. This update is sent only if the message database is used

## Type declaration

### \_

> **\_**: `"updateUnreadMessageCount"`

### chat\_list

> **chat\_list**: [`ChatList`](ChatList.md)

The chat list with changed number of unread messages

### unread\_count

> **unread\_count**: [`int32`](int32-1.md)

Total number of unread messages

### unread\_unmuted\_count

> **unread\_unmuted\_count**: [`int32`](int32-1.md)

Total number of unread messages in unmuted chats

## Defined in

dist/generated/types.d.ts:55721
