[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewChatJoinRequest

# Type Alias: updateNewChatJoinRequest

> **updateNewChatJoinRequest**: `object`

A user sent a join request to a chat; for bots only

## Type declaration

### \_

> **\_**: `"updateNewChatJoinRequest"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### invite\_link

> **invite\_link**: [`chatInviteLink`](chatInviteLink-1.md) \| `null`

The invite link, which was used to send join request; may be null

### request

> **request**: [`chatJoinRequest`](chatJoinRequest-1.md)

Join request

### user\_chat\_id

> **user\_chat\_id**: [`int53`](int53-1.md)

Chat identifier of the private chat with the user

## Defined in

dist/generated/types.d.ts:57965
