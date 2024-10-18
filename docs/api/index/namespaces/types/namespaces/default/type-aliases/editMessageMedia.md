[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageMedia

# Type Alias: editMessageMedia()

> **editMessageMedia**: (`parameters`) => [`Message`](Message-1.md)

Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption. If only the caption needs to be edited, use editMessageCaption instead.

- The media can't be edited if the message was set to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa.

- Returns the edited message after the edit is completed on the server side

## Parameters

• **parameters**: [`editMessageMedia$Input`](editMessageMedia$Input.md)

[editMessageMedia$Input](editMessageMedia$Input.md)

## Returns

[`Message`](Message-1.md)

[Message](Message-1.md)

## Defined in

dist/generated/types.d.ts:80999
