[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVoiceNote

# Type Alias: inputInlineQueryResultVoiceNote

> **inputInlineQueryResultVoiceNote**: `object`

Represents a link to an opus-encoded audio file within an OGG container, single channel audio

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultVoiceNote"`

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVoiceNote, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### title

> **title**: `string`

Title of the voice note

### voice\_note\_duration

> **voice\_note\_duration**: [`int32`](int32.md)

Duration of the voice note, in seconds

### voice\_note\_url

> **voice\_note\_url**: `string`

The URL of the voice note file

## Defined in

dist/generated/types.d.ts:39563
