[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatInviteLinks$Input

# Type Alias: getChatInviteLinks$Input

> **getChatInviteLinks$Input**: `object`

Returns invite links for a chat created by specified administrator. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links

## Type declaration

### \_

> `readonly` **\_**: `"getChatInviteLinks"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### creator\_user\_id?

> `readonly` `optional` **creator\_user\_id**: [`int53`](int53-1.md)

User identifier of a chat administrator. Must be an identifier of the current user for non-owner

### is\_revoked?

> `readonly` `optional` **is\_revoked**: [`Bool$Input`](Bool$Input.md)

Pass true if revoked links needs to be returned instead of active or expired

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of invite links to return; up to 100

### offset\_date?

> `readonly` `optional` **offset\_date**: [`int32`](int32-1.md)

Creation date of an invite link starting after which to return invite links; use 0 to get results from the beginning

### offset\_invite\_link?

> `readonly` `optional` **offset\_invite\_link**: `string`

Invite link starting after which to return invite links; use empty string to get results from the beginning

## Defined in

dist/generated/types.d.ts:89907
