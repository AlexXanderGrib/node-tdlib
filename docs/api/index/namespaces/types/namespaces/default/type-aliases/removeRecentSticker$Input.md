[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / removeRecentSticker$Input

# Type Alias: removeRecentSticker$Input

> **removeRecentSticker$Input**: `object`

Removes a sticker from the list of recently used stickers

## Type declaration

### \_

> `readonly` **\_**: `"removeRecentSticker"`

### is\_attached?

> `readonly` `optional` **is\_attached**: [`Bool$Input`](Bool$Input.md)

Pass true to remove the sticker from the list of stickers recently attached to photo or video files; pass false to remove the sticker from the list of recently sent stickers

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker file to delete

## Defined in

dist/generated/types.d.ts:95695
