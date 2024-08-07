[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / uploadStickerFile$Input

# Type Alias: uploadStickerFile$Input

> **uploadStickerFile$Input**: `object`

Uploads a file with a sticker; returns the uploaded file

## Type declaration

### \_

> `readonly` **\_**: `"uploadStickerFile"`

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

File file to upload; must fit in a 512x512 square. For WEBP stickers the file must be in WEBP or PNG format, which will be converted to WEBP server-side.

- See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements

### sticker\_format?

> `readonly` `optional` **sticker\_format**: [`StickerFormat$Input`](StickerFormat$Input.md)

Sticker format

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Sticker file owner; ignored for regular users

## Defined in

dist/generated/types.d.ts:99668
