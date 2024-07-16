[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / voiceNote$Input

# Type Alias: voiceNote$Input

> **voiceNote$Input**: `object`

Version of [voiceNote](voiceNote-1.md) for method parameters.

Describes a voice note

## Type declaration

### \_

> `readonly` **\_**: `"voiceNote"`

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Duration of the voice note, in seconds; as defined by the sender

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the file; as defined by the sender. Usually, one of "audio/ogg" for Opus in an OGG container, "audio/mpeg" for an MP3 audio, or "audio/mp4" for an M4A audio

### speech\_recognition\_result?

> `readonly` `optional` **speech\_recognition\_result**: [`SpeechRecognitionResult$Input`](SpeechRecognitionResult$Input.md) \| `null`

Result of speech recognition in the voice note; may be null

### voice?

> `readonly` `optional` **voice**: [`file$Input`](file$Input-1.md)

File containing the voice note

### waveform?

> `readonly` `optional` **waveform**: [`bytes$Input`](bytes$Input-1.md)

A waveform representation of the voice note in 5-bit format

## Defined in

dist/generated/types.d.ts:5344
