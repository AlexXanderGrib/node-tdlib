[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewChatJoinRequest$Input

# Type Alias: updateNewChatJoinRequest$Input

> **updateNewChatJoinRequest$Input**: `object`

Version of [updateNewChatJoinRequest](updateNewChatJoinRequest.md) for method parameters.

A user sent a join request to a chat; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewChatJoinRequest"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input-1.md) \| `null`

The invite link, which was used to send join request; may be null

### request?

> `readonly` `optional` **request**: [`chatJoinRequest$Input`](chatJoinRequest$Input-1.md)

Join request

### user\_chat\_id?

> `readonly` `optional` **user\_chat\_id**: [`int53`](int53-1.md)

Chat identifier of the private chat with the user

## Defined in

dist/generated/types.d.ts:57993
