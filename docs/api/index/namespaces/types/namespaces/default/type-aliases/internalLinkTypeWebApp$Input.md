[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeWebApp$Input

# Type Alias: internalLinkTypeWebApp$Input

> **internalLinkTypeWebApp$Input**: `object`

Version of [internalLinkTypeWebApp](internalLinkTypeWebApp.md) for method parameters.

The link is a link to a Web App. Call searchPublicChat with the given bot username, check that the user is a bot, then call searchWebApp with the received bot and the given web_app_short_name.

- Process received foundWebApp by showing a confirmation dialog if needed. If the bot can be added to attachment or side menu, but isn't added yet, then show a disclaimer about Mini Apps being a third-party apps

- instead of the dialog and ask the user to accept their Terms of service. If the user accept the terms and confirms adding, then use toggleBotIsAddedToAttachmentMenu to add the bot.

- Then, call getWebAppLinkUrl and open the returned URL as a Web App

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeWebApp"`

### bot\_username?

> `readonly` `optional` **bot\_username**: `string`

Username of the bot that owns the Web App

### is\_compact?

> `readonly` `optional` **is\_compact**: [`Bool$Input`](Bool$Input.md)

True, if the Web App must be opened in a compact mode instead of a full-size mode

### start\_parameter?

> `readonly` `optional` **start\_parameter**: `string`

Start parameter to be passed to getWebAppLinkUrl

### web\_app\_short\_name?

> `readonly` `optional` **web\_app\_short\_name**: `string`

Short name of the Web App

## Defined in

dist/generated/types.d.ts:48679
