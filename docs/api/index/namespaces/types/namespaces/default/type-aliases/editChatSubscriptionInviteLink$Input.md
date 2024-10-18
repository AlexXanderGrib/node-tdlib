[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editChatSubscriptionInviteLink$Input

# Type Alias: editChatSubscriptionInviteLink$Input

> **editChatSubscriptionInviteLink$Input**: `object`

Edits a subscription invite link for a channel chat. Requires can_invite_users right in the chat for own links and owner privileges for other links

## Type declaration

### \_

> `readonly` **\_**: `"editChatSubscriptionInviteLink"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link to be edited

### name?

> `readonly` `optional` **name**: `string`

Invite link name; 0-32 characters

## Defined in

dist/generated/types.d.ts:92280
