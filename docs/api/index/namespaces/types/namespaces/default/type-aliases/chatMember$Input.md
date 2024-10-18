[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMember$Input

# Type Alias: chatMember$Input

> **chatMember$Input**: `object`

Version of [chatMember](chatMember.md) for method parameters.

Describes a user or a chat as a member of another chat

## Type declaration

### \_

> `readonly` **\_**: `"chatMember"`

### inviter\_user\_id?

> `readonly` `optional` **inviter\_user\_id**: [`int53`](int53.md)

Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown

### joined\_chat\_date?

> `readonly` `optional` **joined\_chat\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user joined/was promoted/was banned in the chat

### member\_id?

> `readonly` `optional` **member\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the chat member. Currently, other chats can be only Left or Banned. Only supergroups and channels can have other chats as Left or Banned members and these chats must be supergroups or channels

### status?

> `readonly` `optional` **status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

Status of the member in the chat

## Defined in

dist/generated/types.d.ts:10627
