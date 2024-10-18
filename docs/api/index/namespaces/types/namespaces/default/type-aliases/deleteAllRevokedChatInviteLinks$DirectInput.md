[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteAllRevokedChatInviteLinks$DirectInput

# Type Alias: deleteAllRevokedChatInviteLinks$DirectInput

> **deleteAllRevokedChatInviteLinks$DirectInput**: `object`

Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### creator\_user\_id?

> `readonly` `optional` **creator\_user\_id**: [`int53`](int53.md)

User identifier of a chat administrator, which links will be deleted. Must be an identifier of the current user for non-owner

## Defined in

dist/generated/types.d.ts:92638
