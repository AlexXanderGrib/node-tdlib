[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageUnreadReactions$Input

# Type Alias: updateMessageUnreadReactions$Input

> **updateMessageUnreadReactions$Input**: `object`

Version of [updateMessageUnreadReactions](updateMessageUnreadReactions.md) for method parameters.

The list of unread reactions added to a message was changed

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageUnreadReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

### unread\_reaction\_count?

> `readonly` `optional` **unread\_reaction\_count**: [`int32`](int32-1.md)

The new number of messages with unread reactions left in the chat

### unread\_reactions?

> `readonly` `optional` **unread\_reactions**: [`vector$Input`](vector$Input.md)\<[`unreadReaction$Input`](unreadReaction$Input-1.md)\>

The new list of unread reactions

## Defined in

dist/generated/types.d.ts:53087
