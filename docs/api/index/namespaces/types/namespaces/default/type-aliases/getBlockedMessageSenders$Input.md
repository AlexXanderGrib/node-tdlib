[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getBlockedMessageSenders$Input

# Type Alias: getBlockedMessageSenders$Input

> **getBlockedMessageSenders$Input**: `object`

Returns users and chats that were blocked by the current user

## Type declaration

### \_

> `readonly` **\_**: `"getBlockedMessageSenders"`

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md)

Block list from which to return users

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of users and chats to return; up to 100

### offset?

> `readonly` `optional` **offset**: [`int32`](int32-1.md)

Number of users and chats to skip in the result; must be non-negative

## Defined in

dist/generated/types.d.ts:92005
