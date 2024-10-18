[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusMember$Input

# Type Alias: chatMemberStatusMember$Input

> **chatMemberStatusMember$Input**: `object`

Version of [chatMemberStatusMember](chatMemberStatusMember.md) for method parameters.

The user is a member of the chat, without any additional privileges or restrictions

## Type declaration

### \_

> `readonly` **\_**: `"chatMemberStatusMember"`

### member\_until\_date?

> `readonly` `optional` **member\_until\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user will be removed from the chat because of the expired subscription; 0 if never. Ignored in setChatMemberStatus

## Defined in

dist/generated/types.d.ts:10506
