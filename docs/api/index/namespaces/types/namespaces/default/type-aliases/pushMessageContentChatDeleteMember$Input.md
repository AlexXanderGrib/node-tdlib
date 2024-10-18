[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentChatDeleteMember$Input

# Type Alias: pushMessageContentChatDeleteMember$Input

> **pushMessageContentChatDeleteMember$Input**: `object`

Version of [pushMessageContentChatDeleteMember](pushMessageContentChatDeleteMember.md) for method parameters.

A chat member was deleted

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentChatDeleteMember"`

### is\_current\_user?

> `readonly` `optional` **is\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the current user was deleted from the group

### is\_left?

> `readonly` `optional` **is\_left**: [`Bool$Input`](Bool$Input.md)

True, if the user has left the group themselves

### member\_name?

> `readonly` `optional` **member\_name**: `string`

Name of the deleted member

## Defined in

dist/generated/types.d.ts:46582
