[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / audio$Input

# Type Alias: audio$Input

> **audio$Input**: `object`

Version of [audio](audio.md) for method parameters.

Describes an audio file. Audio is usually in MP3 or M4A format

## Type declaration

### \_

> `readonly` **\_**: `"audio"`

### album\_cover\_minithumbnail?

> `readonly` `optional` **album\_cover\_minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

The minithumbnail of the album cover; may be null

### album\_cover\_thumbnail?

> `readonly` `optional` **album\_cover\_thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

The thumbnail of the album cover in JPEG format; as defined by the sender. The full size thumbnail is supposed to be extracted from the downloaded audio file; may be null

### audio?

> `readonly` `optional` **audio**: [`file$Input`](file$Input.md)

File containing the audio

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the audio, in seconds; as defined by the sender

### external\_album\_covers?

> `readonly` `optional` **external\_album\_covers**: [`vector$Input`](vector$Input.md)\<[`thumbnail$Input`](thumbnail$Input.md)\>

Album cover variants to use if the downloaded audio file contains no album cover. Provided thumbnail dimensions are approximate

### file\_name?

> `readonly` `optional` **file\_name**: `string`

Original name of the file; as defined by the sender

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

The MIME type of the file; as defined by the sender

### performer?

> `readonly` `optional` **performer**: `string`

Performer of the audio; as defined by the sender

### title?

> `readonly` `optional` **title**: `string`

Title of the audio; as defined by the sender

## Defined in

dist/generated/types.d.ts:4886
