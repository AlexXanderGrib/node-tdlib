[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeBotStart$Input

# Type Alias: internalLinkTypeBotStart$Input

> **internalLinkTypeBotStart$Input**: `object`

Version of [internalLinkTypeBotStart](internalLinkTypeBotStart.md) for method parameters.

The link is a link to a chat with a Telegram bot. Call searchPublicChat with the given bot username, check that the user is a bot, show START button in the chat with the bot,

- and then call sendBotStartMessage with the given start parameter after the button is pressed

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeBotStart"`

### autostart?

> `readonly` `optional` **autostart**: [`Bool$Input`](Bool$Input.md)

True, if sendBotStartMessage must be called automatically without showing the START button

### bot\_username?

> `readonly` `optional` **bot\_username**: `string`

Username of the bot

### start\_parameter?

> `readonly` `optional` **start\_parameter**: `string`

The parameter to be passed to sendBotStartMessage

## Defined in

dist/generated/types.d.ts:47536
