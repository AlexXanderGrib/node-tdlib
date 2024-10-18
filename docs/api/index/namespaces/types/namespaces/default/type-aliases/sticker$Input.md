[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sticker$Input

# Type Alias: sticker$Input

> **sticker$Input**: `object`

Version of [sticker](sticker.md) for method parameters.

Describes a sticker

## Type declaration

### \_

> `readonly` **\_**: `"sticker"`

### emoji?

> `readonly` `optional` **emoji**: `string`

Emoji corresponding to the sticker

### format?

> `readonly` `optional` **format**: [`StickerFormat$Input`](StickerFormat$Input.md)

Sticker format

### full\_type?

> `readonly` `optional` **full\_type**: [`StickerFullType$Input`](StickerFullType$Input.md)

Sticker's full type

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Sticker height; as defined by the sender

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique sticker identifier within the set; 0 if none

### outline?

> `readonly` `optional` **outline**: [`vector$Input`](vector$Input.md)\<[`closedVectorPath$Input`](closedVectorPath$Input.md)\>

Sticker's outline represented as a list of closed vector paths; may be empty. The coordinate system origin is in the upper-left corner

### set\_id?

> `readonly` `optional` **set\_id**: [`int64$Input`](int64$Input.md)

Identifier of the sticker set to which the sticker belongs; 0 if none

### sticker?

> `readonly` `optional` **sticker**: [`file$Input`](file$Input.md)

File containing the sticker

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Sticker thumbnail in WEBP or JPEG format; may be null

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Sticker width; as defined by the sender

## Defined in

dist/generated/types.d.ts:5103
