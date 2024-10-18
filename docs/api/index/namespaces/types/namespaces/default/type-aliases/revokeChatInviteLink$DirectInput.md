[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / revokeChatInviteLink$DirectInput

# Type Alias: revokeChatInviteLink$DirectInput

> **revokeChatInviteLink$DirectInput**: `object`

Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.

- If a primary link is revoked, then additionally to the revoked link returns new primary link

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link to be revoked

## Defined in

dist/generated/types.d.ts:92560
