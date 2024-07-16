[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / audio

# Type Alias: audio

> **audio**: `object`

Describes an audio file. Audio is usually in MP3 or M4A format

## Type declaration

### \_

> **\_**: `"audio"`

### album\_cover\_minithumbnail

> **album\_cover\_minithumbnail**: [`minithumbnail`](minithumbnail-1.md) \| `null`

The minithumbnail of the album cover; may be null

### album\_cover\_thumbnail

> **album\_cover\_thumbnail**: [`thumbnail`](thumbnail-1.md) \| `null`

The thumbnail of the album cover in JPEG format; as defined by the sender. The full size thumbnail is supposed to be extracted from the downloaded audio file; may be null

### audio

> **audio**: [`file`](file-1.md)

File containing the audio

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the audio, in seconds; as defined by the sender

### external\_album\_covers

> **external\_album\_covers**: [`vector`](vector.md)\<[`thumbnail`](thumbnail-1.md)\>

Album cover variants to use if the downloaded audio file contains no album cover. Provided thumbnail dimensions are approximate

### file\_name

> **file\_name**: `string`

Original name of the file; as defined by the sender

### mime\_type

> **mime\_type**: `string`

The MIME type of the file; as defined by the sender

### performer

> **performer**: `string`

Performer of the audio; as defined by the sender

### title

> **title**: `string`

Title of the audio; as defined by the sender

## Defined in

dist/generated/types.d.ts:4787
