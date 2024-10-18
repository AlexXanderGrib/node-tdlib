[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeMainWebApp

# Type Alias: internalLinkTypeMainWebApp

> **internalLinkTypeMainWebApp**: `object`

The link is a link to the main Web App of a bot. Call searchPublicChat with the given bot username, check that the user is a bot and has the main Web App.

- If the bot can be added to attachment menu, then use getAttachmentMenuBot to receive information about the bot, then if the bot isn't added to side menu,

- show a disclaimer about Mini Apps being third-party applications, ask the user to accept their Terms of service and confirm adding the bot to side and attachment menu,

- then if the user accepts the terms and confirms adding, use toggleBotIsAddedToAttachmentMenu to add the bot.

- Then, use getMainWebApp with the given start parameter and open the returned URL as a Web App

## Type declaration

### \_

> **\_**: `"internalLinkTypeMainWebApp"`

### bot\_username

> **bot\_username**: `string`

Username of the bot

### is\_compact

> **is\_compact**: [`Bool`](Bool.md)

True, if the Web App must be opened in the compact mode instead of the full-size mode

### start\_parameter

> **start\_parameter**: `string`

Start parameter to be passed to getMainWebApp

## Defined in

dist/generated/types.d.ts:49503
