[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateInstalledStickerSets$Input

# Type Alias: updateInstalledStickerSets$Input

> **updateInstalledStickerSets$Input**: `object`

Version of [updateInstalledStickerSets](updateInstalledStickerSets.md) for method parameters.

The list of installed sticker sets was updated

## Type declaration

### \_

> `readonly` **\_**: `"updateInstalledStickerSets"`

### sticker\_set\_ids?

> `readonly` `optional` **sticker\_set\_ids**: [`vector$Input`](vector$Input.md)\<[`int64$Input`](int64$Input.md)\>

The new list of installed ordinary sticker sets

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the affected stickers

## Defined in

dist/generated/types.d.ts:57759
