[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendBusinessMessageAlbum

# Type Alias: sendBusinessMessageAlbum()

> **sendBusinessMessageAlbum**: (`parameters`) => [`BusinessMessages`](BusinessMessages-1.md)

Sends 2-10 messages grouped together into an album on behalf of a business account; for bots only. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

## Parameters

• **parameters**: [`sendBusinessMessageAlbum$Input`](sendBusinessMessageAlbum$Input.md)

[sendBusinessMessageAlbum$Input](sendBusinessMessageAlbum$Input.md)

## Returns

[`BusinessMessages`](BusinessMessages-1.md)

[BusinessMessages](BusinessMessages-1.md)

## Defined in

dist/generated/types.d.ts:81677
