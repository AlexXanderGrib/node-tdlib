[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getWebAppLinkUrl$DirectInput

# Type Alias: getWebAppLinkUrl$DirectInput

> **getWebAppLinkUrl$DirectInput**: `object`

Returns an HTTPS URL of a Web App to open after a link of the type internalLinkTypeWebApp is clicked

## Type declaration

### allow\_write\_access?

> `readonly` `optional` **allow\_write\_access**: [`Bool$Input`](Bool$Input.md)

Pass true if the current user allowed the bot to send them messages

### application\_name?

> `readonly` `optional` **application\_name**: `string`

Short name of the current application; 0-64 English letters, digits, and underscores

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat in which the link was clicked; pass 0 if none

### start\_parameter?

> `readonly` `optional` **start\_parameter**: `string`

Start parameter from internalLinkTypeWebApp

### theme?

> `readonly` `optional` **theme**: [`themeParameters$Input`](themeParameters$Input.md) \| `null`

Preferred Web App theme; pass null to use the default theme

### web\_app\_short\_name?

> `readonly` `optional` **web\_app\_short\_name**: `string`

Short name of the Web App

## Defined in

dist/generated/types.d.ts:85005
