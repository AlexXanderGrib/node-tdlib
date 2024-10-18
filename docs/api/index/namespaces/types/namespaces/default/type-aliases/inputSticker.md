[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputSticker

# Type Alias: inputSticker

> **inputSticker**: `object`

A sticker to be added to a sticker set

## Type declaration

### \_

> **\_**: `"inputSticker"`

### emojis

> **emojis**: `string`

String with 1-20 emoji corresponding to the sticker

### format

> **format**: [`StickerFormat`](StickerFormat.md)

Format of the sticker

### keywords

> **keywords**: [`vector`](vector.md)\<`string`\>

List of up to 20 keywords with total length up to 64 characters, which can be used to find the sticker

### mask\_position

> **mask\_position**: [`maskPosition`](maskPosition.md) \| `null`

Position where the mask is placed; pass null if not specified

### sticker

> **sticker**: [`InputFile`](InputFile.md)

File with the sticker; must fit in a 512x512 square. For WEBP stickers the file must be in WEBP or PNG format, which will be converted to WEBP server-side.

- See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements

## Defined in

dist/generated/types.d.ts:52549
