[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageAudio$Input

# Type Alias: inputMessageAudio$Input

> **inputMessageAudio$Input**: `object`

Version of [inputMessageAudio](inputMessageAudio.md) for method parameters.

An audio message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageAudio"`

### album\_cover\_thumbnail?

> `readonly` `optional` **album\_cover\_thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input-1.md) \| `null`

Thumbnail of the cover for the album; pass null to skip thumbnail uploading

### audio?

> `readonly` `optional` **audio**: [`InputFile$Input`](InputFile$Input.md)

Audio file to be sent

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Audio caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Duration of the audio, in seconds; may be replaced by the server

### performer?

> `readonly` `optional` **performer**: `string`

Performer of the audio; 0-64 characters, may be replaced by the server

### title?

> `readonly` `optional` **title**: `string`

Title of the audio; 0-64 characters; may be replaced by the server

## Defined in

dist/generated/types.d.ts:29415
