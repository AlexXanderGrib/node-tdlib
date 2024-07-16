[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchStickers$Input

# Type Alias: searchStickers$Input

> **searchStickers$Input**: `object`

Searches for stickers from public sticker sets that correspond to any of the given emoji

## Type declaration

### \_

> `readonly` **\_**: `"searchStickers"`

### emojis?

> `readonly` `optional` **emojis**: `string`

Space-separated list of emojis to search for; must be non-empty

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of stickers to be returned; 0-100

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the stickers to return

## Defined in

dist/generated/types.d.ts:92625
