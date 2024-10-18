[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageVoiceNote$Input

# Type Alias: messageVoiceNote$Input

> **messageVoiceNote$Input**: `object`

Version of [messageVoiceNote](messageVoiceNote.md) for method parameters.

A voice note message

## Type declaration

### \_

> `readonly` **\_**: `"messageVoiceNote"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md)

Voice note caption

### is\_listened?

> `readonly` `optional` **is\_listened**: [`Bool$Input`](Bool$Input.md)

True, if at least one of the recipients has listened to the voice note

### voice\_note?

> `readonly` `optional` **voice\_note**: [`voiceNote$Input`](voiceNote$Input.md)

The voice note description

## Defined in

dist/generated/types.d.ts:26982
