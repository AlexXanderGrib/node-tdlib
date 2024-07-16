[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateUnreadMessageCount$Input

# Type Alias: updateUnreadMessageCount$Input

> **updateUnreadMessageCount$Input**: `object`

Version of [updateUnreadMessageCount](updateUnreadMessageCount.md) for method parameters.

Number of unread messages in a chat list has changed. This update is sent only if the message database is used

## Type declaration

### \_

> `readonly` **\_**: `"updateUnreadMessageCount"`

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md)

The chat list with changed number of unread messages

### unread\_count?

> `readonly` `optional` **unread\_count**: [`int32`](int32-1.md)

Total number of unread messages

### unread\_unmuted\_count?

> `readonly` `optional` **unread\_unmuted\_count**: [`int32`](int32-1.md)

Total number of unread messages in unmuted chats

## Defined in

dist/generated/types.d.ts:55744
