[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatInviteLinkMembers$Input

# Type Alias: getChatInviteLinkMembers$Input

> **getChatInviteLinkMembers$Input**: `object`

Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Type declaration

### \_

> `readonly` **\_**: `"getChatInviteLinkMembers"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link for which to return chat members

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of chat members to return; up to 100

### offset\_member?

> `readonly` `optional` **offset\_member**: [`chatInviteLinkMember$Input`](chatInviteLinkMember$Input-1.md) \| `null`

A chat member from which to return next chat members; pass null to get results from the beginning

## Defined in

dist/generated/types.d.ts:89985
