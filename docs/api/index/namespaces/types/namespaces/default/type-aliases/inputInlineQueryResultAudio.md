[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultAudio

# Type Alias: inputInlineQueryResultAudio

> **inputInlineQueryResultAudio**: `object`

Represents a link to an MP3 audio file

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultAudio"`

### audio\_duration

> **audio\_duration**: [`int32`](int32.md)

Audio file duration, in seconds

### audio\_url

> **audio\_url**: `string`

The URL of the audio file

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAudio, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### performer

> **performer**: `string`

Performer of the audio file

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### title

> **title**: `string`

Title of the audio file

## Defined in

dist/generated/types.d.ts:38737
