[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeSideMenuBot

# Type Alias: internalLinkTypeSideMenuBot

> **internalLinkTypeSideMenuBot**: `object`

The link is a link to a bot, which can be installed to the side menu. Call searchPublicChat with the given bot username, check that the user is a bot and can be added to attachment menu.

- Then, use getAttachmentMenuBot to receive information about the bot. If the bot isn't added to side menu, then show a disclaimer about Mini Apps being a third-party apps,

- ask the user to accept their Terms of service and confirm adding the bot to side and attachment menu. If the user accept the terms and confirms adding, then use toggleBotIsAddedToAttachmentMenu to add the bot.

- If the bot is added to side menu, then use getWebAppUrl with the given URL and open the returned URL as a Web App

## Type declaration

### \_

> **\_**: `"internalLinkTypeSideMenuBot"`

### bot\_username

> **bot\_username**: `string`

Username of the bot

### is\_compact

> **is\_compact**: [`Bool`](Bool.md)

True, if the Web App must be opened in a compact mode instead of a full-size mode

### url

> **url**: `string`

URL to be passed to getWebAppUrl

## Defined in

dist/generated/types.d.ts:48331
