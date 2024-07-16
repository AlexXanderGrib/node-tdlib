[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getTrendingStickerSets$DirectInput

# Type Alias: getTrendingStickerSets$DirectInput

> **getTrendingStickerSets$DirectInput**: `object`

Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by TDLib

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of sticker sets to be returned; up to 100. For optimal performance, the number of returned sticker sets is chosen by TDLib and can be smaller than the specified limit, even if the end of the list has not been reached

### offset?

> `readonly` `optional` **offset**: [`int32`](int32-1.md)

The offset from which to return the sticker sets; must be non-negative

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the sticker sets to return

## Defined in

dist/generated/types.d.ts:92815
