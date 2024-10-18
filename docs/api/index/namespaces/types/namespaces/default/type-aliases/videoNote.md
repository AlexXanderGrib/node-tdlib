[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / videoNote

# Type Alias: videoNote

> **videoNote**: `object`

Describes a video note. The video must be equal in width and height, cropped to a circle, and stored in MPEG4 format

## Type declaration

### \_

> **\_**: `"videoNote"`

### duration

> **duration**: [`int32`](int32.md)

Duration of the video, in seconds; as defined by the sender

### length

> **length**: [`int32`](int32.md)

Video width and height; as defined by the sender

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail.md) \| `null`

Video minithumbnail; may be null

### speech\_recognition\_result

> **speech\_recognition\_result**: [`SpeechRecognitionResult`](SpeechRecognitionResult.md) \| `null`

Result of speech recognition in the video note; may be null

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail.md) \| `null`

Video thumbnail in JPEG format; as defined by the sender; may be null

### video

> **video**: [`file`](file.md)

File containing the video

### waveform

> **waveform**: [`bytes`](bytes.md)

A waveform representation of the video note's audio in 5-bit format; may be empty if unknown

## Defined in

dist/generated/types.d.ts:5273
