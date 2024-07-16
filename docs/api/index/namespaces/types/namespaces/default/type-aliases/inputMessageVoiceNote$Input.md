[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVoiceNote$Input

# Type Alias: inputMessageVoiceNote$Input

> **inputMessageVoiceNote$Input**: `object`

Version of [inputMessageVoiceNote](inputMessageVoiceNote.md) for method parameters.

A voice note message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageVoiceNote"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Voice note caption; may be null if empty; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Duration of the voice note, in seconds

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

Voice note self-destruct type; may be null if none; pass null if none; private chats only

### voice\_note?

> `readonly` `optional` **voice\_note**: [`InputFile$Input`](InputFile$Input.md)

Voice note to be sent. The voice note must be encoded with the Opus codec and stored inside an OGG container with a single audio channel, or be in MP3 or M4A format as regular audio

### waveform?

> `readonly` `optional` **waveform**: [`bytes$Input`](bytes$Input-1.md)

Waveform representation of the voice note in 5-bit format

## Defined in

dist/generated/types.d.ts:29948
