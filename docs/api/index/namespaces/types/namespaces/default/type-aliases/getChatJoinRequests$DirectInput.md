[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatJoinRequests$DirectInput

# Type Alias: getChatJoinRequests$DirectInput

> **getChatJoinRequests$DirectInput**: `object`

Returns pending join requests in a chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link for which to return join requests. If empty, all join requests will be returned. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of requests to join the chat to return

### offset\_request?

> `readonly` `optional` **offset\_request**: [`chatJoinRequest$Input`](chatJoinRequest$Input.md) \| `null`

A chat join request from which to return next requests; pass null to get results from the beginning

### query?

> `readonly` `optional` **query**: `string`

A query to search for in the first names, last names and usernames of the users to return

## Defined in

dist/generated/types.d.ts:92747
