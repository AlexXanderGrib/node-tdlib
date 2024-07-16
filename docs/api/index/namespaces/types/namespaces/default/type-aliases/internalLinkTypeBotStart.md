[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeBotStart

# Type Alias: internalLinkTypeBotStart

> **internalLinkTypeBotStart**: `object`

The link is a link to a chat with a Telegram bot. Call searchPublicChat with the given bot username, check that the user is a bot, show START button in the chat with the bot,

- and then call sendBotStartMessage with the given start parameter after the button is pressed

## Type declaration

### \_

> **\_**: `"internalLinkTypeBotStart"`

### autostart

> **autostart**: [`Bool`](Bool.md)

True, if sendBotStartMessage must be called automatically without showing the START button

### bot\_username

> **bot\_username**: `string`

Username of the bot

### start\_parameter

> **start\_parameter**: `string`

The parameter to be passed to sendBotStartMessage

## Defined in

dist/generated/types.d.ts:47511
