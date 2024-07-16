[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeAttachmentMenuBot$Input

# Type Alias: internalLinkTypeAttachmentMenuBot$Input

> **internalLinkTypeAttachmentMenuBot$Input**: `object`

Version of [internalLinkTypeAttachmentMenuBot](internalLinkTypeAttachmentMenuBot.md) for method parameters.

The link is a link to an attachment menu bot to be opened in the specified or a chosen chat. Process given target_chat to open the chat.

- Then, call searchPublicChat with the given bot username, check that the user is a bot and can be added to attachment menu. Then, use getAttachmentMenuBot to receive information about the bot.

- If the bot isn't added to attachment menu, then show a disclaimer about Mini Apps being a third-party apps, ask the user to accept their Terms of service and confirm adding the bot to side and attachment menu.

- If the user accept the terms and confirms adding, then use toggleBotIsAddedToAttachmentMenu to add the bot.

- If the attachment menu bot can't be used in the opened chat, show an error to the user. If the bot is added to attachment menu and can be used in the chat, then use openWebApp with the given URL

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeAttachmentMenuBot"`

### bot\_username?

> `readonly` `optional` **bot\_username**: `string`

Username of the bot

### target\_chat?

> `readonly` `optional` **target\_chat**: [`TargetChat$Input`](TargetChat$Input.md)

Target chat to be opened

### url?

> `readonly` `optional` **url**: `string`

URL to be passed to openWebApp

## Defined in

dist/generated/types.d.ts:47394
