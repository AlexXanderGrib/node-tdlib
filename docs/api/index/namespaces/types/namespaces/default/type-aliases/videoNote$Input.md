[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / videoNote$Input

# Type Alias: videoNote$Input

> **videoNote$Input**: `object`

Version of [videoNote](videoNote.md) for method parameters.

Describes a video note. The video must be equal in width and height, cropped to a circle, and stored in MPEG4 format

## Type declaration

### \_

> `readonly` **\_**: `"videoNote"`

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the video, in seconds; as defined by the sender

### length?

> `readonly` `optional` **length**: [`int32`](int32.md)

Video width and height; as defined by the sender

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

Video minithumbnail; may be null

### speech\_recognition\_result?

> `readonly` `optional` **speech\_recognition\_result**: [`SpeechRecognitionResult$Input`](SpeechRecognitionResult$Input.md) \| `null`

Result of speech recognition in the video note; may be null

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Video thumbnail in JPEG format; as defined by the sender; may be null

### video?

> `readonly` `optional` **video**: [`file$Input`](file$Input.md)

File containing the video

### waveform?

> `readonly` `optional` **waveform**: [`bytes$Input`](bytes$Input.md)

A waveform representation of the video note's audio in 5-bit format; may be empty if unknown

## Defined in

dist/generated/types.d.ts:5316
