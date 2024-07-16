[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentVoiceNote$Input

# Type Alias: pushMessageContentVoiceNote$Input

> **pushMessageContentVoiceNote$Input**: `object`

Version of [pushMessageContentVoiceNote](pushMessageContentVoiceNote.md) for method parameters.

A voice note message

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentVoiceNote"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### voice\_note?

> `readonly` `optional` **voice\_note**: [`voiceNote$Input`](voiceNote$Input-1.md) \| `null`

Message content; may be null

## Defined in

dist/generated/types.d.ts:44873
