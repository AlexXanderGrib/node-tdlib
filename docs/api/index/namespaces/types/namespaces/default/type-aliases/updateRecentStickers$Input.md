[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateRecentStickers$Input

# Type Alias: updateRecentStickers$Input

> **updateRecentStickers$Input**: `object`

Version of [updateRecentStickers](updateRecentStickers.md) for method parameters.

The list of recently used stickers was updated

## Type declaration

### \_

> `readonly` **\_**: `"updateRecentStickers"`

### is\_attached?

> `readonly` `optional` **is\_attached**: [`Bool$Input`](Bool$Input.md)

True, if the list of stickers attached to photo or video files was updated; otherwise, the list of sent stickers is updated

### sticker\_ids?

> `readonly` `optional` **sticker\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

The new list of file identifiers of recently used stickers

## Defined in

dist/generated/types.d.ts:56211
