[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editQuickReplyMessage$DirectInput

# Type Alias: editQuickReplyMessage$DirectInput

> **editQuickReplyMessage$DirectInput**: `object`

Asynchronously edits the text, media or caption of a quick reply message. Use quickReplyMessage.can_be_edited to check whether a message can be edited.

- Text message can be edited only to a text message. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa

## Type declaration

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New content of the message. Must be one of the following types: inputMessageText, inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32.md)

Unique identifier of the quick reply shortcut with the message

## Defined in

dist/generated/types.d.ts:82627
