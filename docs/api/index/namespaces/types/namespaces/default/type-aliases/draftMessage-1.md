[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / draftMessage

# Type Alias: draftMessage

> **draftMessage**: `object`

Contains information about a message draft

## Type declaration

### \_

> **\_**: `"draftMessage"`

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the draft was created

### effect\_id

> **effect\_id**: [`int64`](int64-1.md)

Identifier of the effect to apply to the message when it is sent; 0 if none

### input\_message\_text

> **input\_message\_text**: [`InputMessageContent`](InputMessageContent.md)

Content of the message draft; must be of the type inputMessageText, inputMessageVideoNote, or inputMessageVoiceNote

### reply\_to

> **reply\_to**: [`InputMessageReplyTo`](InputMessageReplyTo.md) \| `null`

Information about the message to be replied; must be of the type inputMessageReplyToMessage; may be null if none

## Defined in

dist/generated/types.d.ts:15235
