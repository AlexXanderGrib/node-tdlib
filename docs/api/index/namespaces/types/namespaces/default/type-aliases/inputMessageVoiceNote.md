[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVoiceNote

# Type Alias: inputMessageVoiceNote

> **inputMessageVoiceNote**: `object`

A voice note message

## Type declaration

### \_

> **\_**: `"inputMessageVoiceNote"`

### caption

> **caption**: [`formattedText`](formattedText-1.md) \| `null`

Voice note caption; may be null if empty; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the voice note, in seconds

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

Voice note self-destruct type; may be null if none; pass null if none; private chats only

### voice\_note

> **voice\_note**: [`InputFile`](InputFile.md)

Voice note to be sent. The voice note must be encoded with the Opus codec and stored inside an OGG container with a single audio channel, or be in MP3 or M4A format as regular audio

### waveform

> **waveform**: [`bytes`](bytes-1.md)

Waveform representation of the voice note in 5-bit format

## Defined in

dist/generated/types.d.ts:29915
