[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentChatAddMembers$Input

# Type Alias: pushMessageContentChatAddMembers$Input

> **pushMessageContentChatAddMembers$Input**: `object`

Version of [pushMessageContentChatAddMembers](pushMessageContentChatAddMembers.md) for method parameters.

New chat members were invited to a group

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentChatAddMembers"`

### is\_current\_user?

> `readonly` `optional` **is\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the current user was added to the group

### is\_returned?

> `readonly` `optional` **is\_returned**: [`Bool$Input`](Bool$Input.md)

True, if the user has returned to the group themselves

### member\_name?

> `readonly` `optional` **member\_name**: `string`

Name of the added member

## Defined in

dist/generated/types.d.ts:44926
