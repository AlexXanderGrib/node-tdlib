[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / draftMessage$Input

# Type Alias: draftMessage$Input

> **draftMessage$Input**: `object`

Version of [draftMessage](draftMessage-1.md) for method parameters.

Contains information about a message draft

## Type declaration

### \_

> `readonly` **\_**: `"draftMessage"`

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the draft was created

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the effect to apply to the message when it is sent; 0 if none

### input\_message\_text?

> `readonly` `optional` **input\_message\_text**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

Content of the message draft; must be of the type inputMessageText, inputMessageVideoNote, or inputMessageVoiceNote

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message to be replied; must be of the type inputMessageReplyToMessage; may be null if none

## Defined in

dist/generated/types.d.ts:15263
