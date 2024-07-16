[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageUnreadReactions

# Type Alias: updateMessageUnreadReactions

> **updateMessageUnreadReactions**: `object`

The list of unread reactions added to a message was changed

## Type declaration

### \_

> **\_**: `"updateMessageUnreadReactions"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id

> **message\_id**: [`int53`](int53-1.md)

Message identifier

### unread\_reaction\_count

> **unread\_reaction\_count**: [`int32`](int32-1.md)

The new number of messages with unread reactions left in the chat

### unread\_reactions

> **unread\_reactions**: [`vector`](vector.md)\<[`unreadReaction`](unreadReaction-1.md)\>

The new list of unread reactions

## Defined in

dist/generated/types.d.ts:53059
