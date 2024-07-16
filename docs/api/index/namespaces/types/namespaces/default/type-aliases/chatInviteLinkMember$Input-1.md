[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkMember$Input

# Type Alias: chatInviteLinkMember$Input

> **chatInviteLinkMember$Input**: `object`

Version of [chatInviteLinkMember](chatInviteLinkMember-1.md) for method parameters.

Describes a chat member joined a chat via an invite link

## Type declaration

### \_

> `readonly` **\_**: `"chatInviteLinkMember"`

### approver\_user\_id?

> `readonly` `optional` **approver\_user\_id**: [`int53`](int53-1.md)

User identifier of the chat administrator, approved user join request

### joined\_chat\_date?

> `readonly` `optional` **joined\_chat\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user joined the chat

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

### via\_chat\_folder\_invite\_link?

> `readonly` `optional` **via\_chat\_folder\_invite\_link**: [`Bool$Input`](Bool$Input.md)

True, if the user has joined the chat using an invite link for a chat folder

## Defined in

dist/generated/types.d.ts:10731
