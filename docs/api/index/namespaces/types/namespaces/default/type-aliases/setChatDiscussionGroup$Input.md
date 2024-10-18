[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatDiscussionGroup$Input

# Type Alias: setChatDiscussionGroup$Input

> **setChatDiscussionGroup$Input**: `object`

Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is specified

## Type declaration

### \_

> `readonly` **\_**: `"setChatDiscussionGroup"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the channel chat. Pass 0 to remove a link from the supergroup passed in the second argument to a linked channel chat (requires can_pin_messages member right in the supergroup)

### discussion\_chat\_id?

> `readonly` `optional` **discussion\_chat\_id**: [`int53`](int53.md)

Identifier of a new channel's discussion group. Use 0 to remove the discussion group. Use the method getSuitableDiscussionChats to find all suitable groups.

- Basic group chats must be first upgraded to supergroup chats. If new chat members don't have access to old messages in the supergroup, then toggleSupergroupIsAllHistoryAvailable must be used first to change that

## Defined in

dist/generated/types.d.ts:88296
