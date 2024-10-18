[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMemberJoinedByInviteLink$Input

# Type Alias: chatEventMemberJoinedByInviteLink$Input

> **chatEventMemberJoinedByInviteLink$Input**: `object`

Version of [chatEventMemberJoinedByInviteLink](chatEventMemberJoinedByInviteLink.md) for method parameters.

A new member joined the chat via an invite link

## Type declaration

### \_

> `readonly` **\_**: `"chatEventMemberJoinedByInviteLink"`

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input.md)

Invite link used to join the chat

### via\_chat\_folder\_invite\_link?

> `readonly` `optional` **via\_chat\_folder\_invite\_link**: [`Bool$Input`](Bool$Input.md)

True, if the user has joined the chat using an invite link for a chat folder

## Defined in

dist/generated/types.d.ts:40731
