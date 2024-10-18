[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteRevokedChatInviteLink$Input

# Type Alias: deleteRevokedChatInviteLink$Input

> **deleteRevokedChatInviteLink$Input**: `object`

Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Type declaration

### \_

> `readonly` **\_**: `"deleteRevokedChatInviteLink"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link to revoke

## Defined in

dist/generated/types.d.ts:92584
