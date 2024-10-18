[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setStickerKeywords$DirectInput

# Type Alias: setStickerKeywords$DirectInput

> **setStickerKeywords$DirectInput**: `object`

Changes the list of keywords of a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user

## Type declaration

### keywords?

> `readonly` `optional` **keywords**: [`vector$Input`](vector$Input.md)\<`string`\>

List of up to 20 keywords with total length up to 64 characters, which can be used to find the sticker

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker

## Defined in

dist/generated/types.d.ts:103035
