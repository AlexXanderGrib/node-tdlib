[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / openWebApp$Input

# Type Alias: openWebApp$Input

> **openWebApp$Input**: `object`

Informs TDLib that a Web App is being opened from the attachment menu, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button.

- For each bot, a confirmation alert about data sent to the bot must be shown once

## Type declaration

### \_

> `readonly` **\_**: `"openWebApp"`

### application\_name?

> `readonly` `optional` **application\_name**: `string`

Short name of the current application; 0-64 English letters, digits, and underscores

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the bot, providing the Web App

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat in which the Web App is opened. The Web App can't be opened in secret chats

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the message will be sent

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message or story to be replied in the message sent by the Web App; pass null if none

### theme?

> `readonly` `optional` **theme**: [`themeParameters$Input`](themeParameters$Input.md) \| `null`

Preferred Web App theme; pass null to use the default theme

### url?

> `readonly` `optional` **url**: `string`

The URL from an inlineKeyboardButtonTypeWebApp button, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an empty string otherwise

## Defined in

dist/generated/types.d.ts:85228
