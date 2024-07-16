[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getOwnedStickerSets$Input

# Type Alias: getOwnedStickerSets$Input

> **getOwnedStickerSets$Input**: `object`

Returns sticker sets owned by the current user

## Type declaration

### \_

> `readonly` **\_**: `"getOwnedStickerSets"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of sticker sets to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit

### offset\_sticker\_set\_id?

> `readonly` `optional` **offset\_sticker\_set\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the sticker set from which to return owned sticker sets; use 0 to get results from the beginning

## Defined in

dist/generated/types.d.ts:100316
