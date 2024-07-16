[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / trendingStickerSets$Input

# Type Alias: trendingStickerSets$Input

> **trendingStickerSets$Input**: `object`

Version of [trendingStickerSets](trendingStickerSets-1.md) for method parameters.

Represents a list of trending sticker sets

## Type declaration

### \_

> `readonly` **\_**: `"trendingStickerSets"`

### is\_premium?

> `readonly` `optional` **is\_premium**: [`Bool$Input`](Bool$Input.md)

True, if the list contains sticker sets with premium stickers

### sets?

> `readonly` `optional` **sets**: [`vector$Input`](vector$Input.md)\<[`stickerSetInfo$Input`](stickerSetInfo$Input-1.md)\>

List of trending sticker sets

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of trending sticker sets

## Defined in

dist/generated/types.d.ts:31598
