[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChatMessagesByDate$Input

# Type Alias: deleteChatMessagesByDate$Input

> **deleteChatMessagesByDate$Input**: `object`

Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages sent in the last 30 seconds will not be deleted

## Type declaration

### \_

> `readonly` **\_**: `"deleteChatMessagesByDate"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### max\_date?

> `readonly` `optional` **max\_date**: [`int32`](int32-1.md)

The maximum date of the messages to delete

### min\_date?

> `readonly` `optional` **min\_date**: [`int32`](int32-1.md)

The minimum date of the messages to delete

### revoke?

> `readonly` `optional` **revoke**: [`Bool$Input`](Bool$Input.md)

Pass true to delete chat messages for all users; private chats only

## Defined in

dist/generated/types.d.ts:78710
