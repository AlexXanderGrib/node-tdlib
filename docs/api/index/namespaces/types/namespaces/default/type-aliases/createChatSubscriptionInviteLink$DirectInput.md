[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createChatSubscriptionInviteLink$DirectInput

# Type Alias: createChatSubscriptionInviteLink$DirectInput

> **createChatSubscriptionInviteLink$DirectInput**: `object`

Creates a new subscription invite link for a channel chat. Requires can_invite_users right in the chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### name?

> `readonly` `optional` **name**: `string`

Invite link name; 0-32 characters

### subscription\_pricing?

> `readonly` `optional` **subscription\_pricing**: [`starSubscriptionPricing$Input`](starSubscriptionPricing$Input.md)

Information about subscription plan that will be applied to the users joining the chat via the link.

- Subscription period must be 2592000 in production environment, and 60 or 300 if Telegram test environment is used

## Defined in

dist/generated/types.d.ts:92161
