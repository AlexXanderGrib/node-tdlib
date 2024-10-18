[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputSticker$Input

# Type Alias: inputSticker$Input

> **inputSticker$Input**: `object`

Version of [inputSticker](inputSticker.md) for method parameters.

A sticker to be added to a sticker set

## Type declaration

### \_

> `readonly` **\_**: `"inputSticker"`

### emojis?

> `readonly` `optional` **emojis**: `string`

String with 1-20 emoji corresponding to the sticker

### format?

> `readonly` `optional` **format**: [`StickerFormat$Input`](StickerFormat$Input.md)

Format of the sticker

### keywords?

> `readonly` `optional` **keywords**: [`vector$Input`](vector$Input.md)\<`string`\>

List of up to 20 keywords with total length up to 64 characters, which can be used to find the sticker

### mask\_position?

> `readonly` `optional` **mask\_position**: [`maskPosition$Input`](maskPosition$Input.md) \| `null`

Position where the mask is placed; pass null if not specified

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

File with the sticker; must fit in a 512x512 square. For WEBP stickers the file must be in WEBP or PNG format, which will be converted to WEBP server-side.

- See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements

## Defined in

dist/generated/types.d.ts:52584
