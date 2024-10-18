[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteRevokedChatInviteLink$DirectInput

# Type Alias: deleteRevokedChatInviteLink$DirectInput

> **deleteRevokedChatInviteLink$DirectInput**: `object`

Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link to revoke

## Defined in

dist/generated/types.d.ts:92600
