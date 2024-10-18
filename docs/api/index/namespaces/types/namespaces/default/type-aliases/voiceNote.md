[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / voiceNote

# Type Alias: voiceNote

> **voiceNote**: `object`

Describes a voice note

## Type declaration

### \_

> **\_**: `"voiceNote"`

### duration

> **duration**: [`int32`](int32.md)

Duration of the voice note, in seconds; as defined by the sender

### mime\_type

> **mime\_type**: `string`

MIME type of the file; as defined by the sender. Usually, one of "audio/ogg" for Opus in an OGG container, "audio/mpeg" for an MP3 audio, or "audio/mp4" for an M4A audio

### speech\_recognition\_result

> **speech\_recognition\_result**: [`SpeechRecognitionResult`](SpeechRecognitionResult.md) \| `null`

Result of speech recognition in the voice note; may be null

### voice

> **voice**: [`file`](file.md)

File containing the voice note

### waveform

> **waveform**: [`bytes`](bytes.md)

A waveform representation of the voice note in 5-bit format

## Defined in

dist/generated/types.d.ts:5357
