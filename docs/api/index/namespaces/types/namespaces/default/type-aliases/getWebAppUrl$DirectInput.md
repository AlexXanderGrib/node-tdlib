[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getWebAppUrl$DirectInput

# Type Alias: getWebAppUrl$DirectInput

> **getWebAppUrl$DirectInput**: `object`

Returns an HTTPS URL of a Web App to open from the side menu, a keyboardButtonTypeWebApp button, an inlineQueryResultsButtonTypeWebApp button, or an internalLinkTypeSideMenuBot link

## Type declaration

### application\_name?

> `readonly` `optional` **application\_name**: `string`

Short name of the application; 0-64 English letters, digits, and underscores

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### theme?

> `readonly` `optional` **theme**: [`themeParameters$Input`](themeParameters$Input-1.md) \| `null`

Preferred Web App theme; pass null to use the default theme

### url?

> `readonly` `optional` **url**: `string`

The URL from a keyboardButtonTypeWebApp button, inlineQueryResultsButtonTypeWebApp button, an internalLinkTypeSideMenuBot link, or an empty when the bot is opened from the side menu

## Defined in

dist/generated/types.d.ts:82847