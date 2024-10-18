[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultAudio$Input

# Type Alias: inputInlineQueryResultAudio$Input

> **inputInlineQueryResultAudio$Input**: `object`

Version of [inputInlineQueryResultAudio](inputInlineQueryResultAudio.md) for method parameters.

Represents a link to an MP3 audio file

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultAudio"`

### audio\_duration?

> `readonly` `optional` **audio\_duration**: [`int32`](int32.md)

Audio file duration, in seconds

### audio\_url?

> `readonly` `optional` **audio\_url**: `string`

The URL of the audio file

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAudio, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### performer?

> `readonly` `optional` **performer**: `string`

Performer of the audio file

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### title?

> `readonly` `optional` **title**: `string`

Title of the audio file

## Defined in

dist/generated/types.d.ts:38780
