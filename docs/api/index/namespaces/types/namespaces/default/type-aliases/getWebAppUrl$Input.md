[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getWebAppUrl$Input

# Type Alias: getWebAppUrl$Input

> **getWebAppUrl$Input**: `object`

Returns an HTTPS URL of a Web App to open from the side menu, a keyboardButtonTypeWebApp button, or an inlineQueryResultsButtonTypeWebApp button

## Type declaration

### \_

> `readonly` **\_**: `"getWebAppUrl"`

### application\_name?

> `readonly` `optional` **application\_name**: `string`

Short name of the current application; 0-64 English letters, digits, and underscores

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot

### theme?

> `readonly` `optional` **theme**: [`themeParameters$Input`](themeParameters$Input.md) \| `null`

Preferred Web App theme; pass null to use the default theme

### url?

> `readonly` `optional` **url**: `string`

The URL from a keyboardButtonTypeWebApp button, inlineQueryResultsButtonTypeWebApp button, or an empty string when the bot is opened from the side menu

## Defined in

dist/generated/types.d.ts:85120
