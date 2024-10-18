[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageAudio

# Type Alias: inputMessageAudio

> **inputMessageAudio**: `object`

An audio message

## Type declaration

### \_

> **\_**: `"inputMessageAudio"`

### album\_cover\_thumbnail

> **album\_cover\_thumbnail**: [`inputThumbnail`](inputThumbnail.md) \| `null`

Thumbnail of the cover for the album; pass null to skip thumbnail uploading

### audio

> **audio**: [`InputFile`](InputFile.md)

Audio file to be sent

### caption

> **caption**: [`formattedText`](formattedText.md) \| `null`

Audio caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration

> **duration**: [`int32`](int32.md)

Duration of the audio, in seconds; may be replaced by the server

### performer

> **performer**: `string`

Performer of the audio; 0-64 characters, may be replaced by the server

### title

> **title**: `string`

Title of the audio; 0-64 characters; may be replaced by the server

## Defined in

dist/generated/types.d.ts:30251
