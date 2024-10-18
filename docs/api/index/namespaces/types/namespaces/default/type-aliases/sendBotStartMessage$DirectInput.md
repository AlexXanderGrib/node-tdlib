[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendBotStartMessage$DirectInput

# Type Alias: sendBotStartMessage$DirectInput

> **sendBotStartMessage$DirectInput**: `object`

Invites a bot to a chat (if it is not yet a member) and sends it the /start command; requires can_invite_users member right. Bots can't be invited to a private chat other than the chat with the bot.

- Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the bot

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the target chat

### parameter?

> `readonly` `optional` **parameter**: `string`

A hidden parameter sent to the bot for deep linking purposes (https://core.telegram.org/bots#deep-linking)

## Defined in

dist/generated/types.d.ts:80258
