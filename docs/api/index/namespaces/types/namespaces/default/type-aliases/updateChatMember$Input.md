[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatMember$Input

# Type Alias: updateChatMember$Input

> **updateChatMember$Input**: `object`

Version of [updateChatMember](updateChatMember.md) for method parameters.

User rights changed in a chat; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateChatMember"`

### actor\_user\_id?

> `readonly` `optional` **actor\_user\_id**: [`int53`](int53-1.md)

Identifier of the user, changing the rights

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user rights were changed

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input-1.md) \| `null`

If user has joined the chat using an invite link, the invite link; may be null

### new\_chat\_member?

> `readonly` `optional` **new\_chat\_member**: [`chatMember$Input`](chatMember$Input-1.md)

New chat member

### old\_chat\_member?

> `readonly` `optional` **old\_chat\_member**: [`chatMember$Input`](chatMember$Input-1.md)

Previous chat member

### via\_chat\_folder\_invite\_link?

> `readonly` `optional` **via\_chat\_folder\_invite\_link**: [`Bool$Input`](Bool$Input.md)

True, if the user has joined the chat using an invite link for a chat folder

### via\_join\_request?

> `readonly` `optional` **via\_join\_request**: [`Bool$Input`](Bool$Input.md)

True, if the user has joined the chat after sending a join request and being approved by an administrator

## Defined in

dist/generated/types.d.ts:57919
