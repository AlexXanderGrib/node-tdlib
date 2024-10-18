[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createChatInviteLink$DirectInput

# Type Alias: createChatInviteLink$DirectInput

> **createChatInviteLink$DirectInput**: `object`

Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### creates\_join\_request?

> `readonly` `optional` **creates\_join\_request**: [`Bool$Input`](Bool$Input.md)

Pass true if users joining the chat via the link need to be approved by chat administrators. In this case, member_limit must be 0

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the link will expire; pass 0 if never

### member\_limit?

> `readonly` `optional` **member\_limit**: [`int32`](int32.md)

The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited

### name?

> `readonly` `optional` **name**: `string`

Invite link name; 0-32 characters

## Defined in

dist/generated/types.d.ts:92101
