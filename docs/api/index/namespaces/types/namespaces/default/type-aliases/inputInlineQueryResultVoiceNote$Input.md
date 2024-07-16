[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVoiceNote$Input

# Type Alias: inputInlineQueryResultVoiceNote$Input

> **inputInlineQueryResultVoiceNote$Input**: `object`

Version of [inputInlineQueryResultVoiceNote](inputInlineQueryResultVoiceNote.md) for method parameters.

Represents a link to an opus-encoded audio file within an OGG container, single channel audio

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultVoiceNote"`

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVoiceNote, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### title?

> `readonly` `optional` **title**: `string`

Title of the voice note

### voice\_note\_duration?

> `readonly` `optional` **voice\_note\_duration**: [`int32`](int32-1.md)

Duration of the voice note, in seconds

### voice\_note\_url?

> `readonly` `optional` **voice\_note\_url**: `string`

The URL of the voice note file

## Defined in

dist/generated/types.d.ts:38231
