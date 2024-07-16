[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / processChatJoinRequests$DirectInput

# Type Alias: processChatJoinRequests$DirectInput

> **processChatJoinRequests$DirectInput**: `object`

Handles all pending join requests for a given link in a chat

## Type declaration

### approve?

> `readonly` `optional` **approve**: [`Bool$Input`](Bool$Input.md)

Pass true to approve all requests; pass false to decline them

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link for which to process join requests. If empty, all join requests will be processed. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Defined in

dist/generated/types.d.ts:90356
