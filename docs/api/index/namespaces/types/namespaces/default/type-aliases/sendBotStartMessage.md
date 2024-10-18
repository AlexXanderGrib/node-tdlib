[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendBotStartMessage

# Type Alias: sendBotStartMessage()

> **sendBotStartMessage**: (`parameters`) => [`Message`](Message-1.md)

Invites a bot to a chat (if it is not yet a member) and sends it the /start command; requires can_invite_users member right. Bots can't be invited to a private chat other than the chat with the bot.

- Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message

## Parameters

• **parameters**: [`sendBotStartMessage$Input`](sendBotStartMessage$Input.md)

[sendBotStartMessage$Input](sendBotStartMessage$Input.md)

## Returns

[`Message`](Message-1.md)

[Message](Message-1.md)

## Defined in

dist/generated/types.d.ts:80283
