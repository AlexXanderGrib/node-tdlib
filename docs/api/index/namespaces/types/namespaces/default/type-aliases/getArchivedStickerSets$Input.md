[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getArchivedStickerSets$Input

# Type Alias: getArchivedStickerSets$Input

> **getArchivedStickerSets$Input**: `object`

Returns a list of archived sticker sets

## Type declaration

### \_

> `readonly` **\_**: `"getArchivedStickerSets"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of sticker sets to return; up to 100

### offset\_sticker\_set\_id?

> `readonly` `optional` **offset\_sticker\_set\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the sticker set from which to return the result; use 0 to get results from the beginning

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the sticker sets to return

## Defined in

dist/generated/types.d.ts:92746
