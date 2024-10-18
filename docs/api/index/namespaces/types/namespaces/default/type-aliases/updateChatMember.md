[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatMember

# Type Alias: updateChatMember

> **updateChatMember**: `object`

User rights changed in a chat; for bots only

## Type declaration

### \_

> **\_**: `"updateChatMember"`

### actor\_user\_id

> **actor\_user\_id**: [`int53`](int53.md)

Identifier of the user, changing the rights

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user rights were changed

### invite\_link

> **invite\_link**: [`chatInviteLink`](chatInviteLink.md) \| `null`

If user has joined the chat using an invite link, the invite link; may be null

### new\_chat\_member

> **new\_chat\_member**: [`chatMember`](chatMember.md)

New chat member

### old\_chat\_member

> **old\_chat\_member**: [`chatMember`](chatMember.md)

Previous chat member

### via\_chat\_folder\_invite\_link

> **via\_chat\_folder\_invite\_link**: [`Bool`](Bool.md)

True, if the user has joined the chat using an invite link for a chat folder

### via\_join\_request

> **via\_join\_request**: [`Bool`](Bool.md)

True, if the user has joined the chat after sending a join request and being approved by an administrator

## Defined in

dist/generated/types.d.ts:59511
