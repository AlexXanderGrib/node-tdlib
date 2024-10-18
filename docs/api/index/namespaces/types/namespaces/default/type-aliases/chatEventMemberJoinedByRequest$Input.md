[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMemberJoinedByRequest$Input

# Type Alias: chatEventMemberJoinedByRequest$Input

> **chatEventMemberJoinedByRequest$Input**: `object`

Version of [chatEventMemberJoinedByRequest](chatEventMemberJoinedByRequest.md) for method parameters.

A new member was accepted to the chat by an administrator

## Type declaration

### \_

> `readonly` **\_**: `"chatEventMemberJoinedByRequest"`

### approver\_user\_id?

> `readonly` `optional` **approver\_user\_id**: [`int53`](int53.md)

User identifier of the chat administrator, approved user join request

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input.md) \| `null`

Invite link used to join the chat; may be null

## Defined in

dist/generated/types.d.ts:40765
