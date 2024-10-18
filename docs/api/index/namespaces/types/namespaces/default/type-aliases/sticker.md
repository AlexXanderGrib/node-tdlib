[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sticker

# Type Alias: sticker

> **sticker**: `object`

Describes a sticker

## Type declaration

### \_

> **\_**: `"sticker"`

### emoji

> **emoji**: `string`

Emoji corresponding to the sticker

### format

> **format**: [`StickerFormat`](StickerFormat.md)

Sticker format

### full\_type

> **full\_type**: [`StickerFullType`](StickerFullType.md)

Sticker's full type

### height

> **height**: [`int32`](int32.md)

Sticker height; as defined by the sender

### id

> **id**: [`int64`](int64.md)

Unique sticker identifier within the set; 0 if none

### outline

> **outline**: [`vector`](vector.md)\<[`closedVectorPath`](closedVectorPath.md)\>

Sticker's outline represented as a list of closed vector paths; may be empty. The coordinate system origin is in the upper-left corner

### set\_id

> **set\_id**: [`int64`](int64.md)

Identifier of the sticker set to which the sticker belongs; 0 if none

### sticker

> **sticker**: [`file`](file.md)

File containing the sticker

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail.md) \| `null`

Sticker thumbnail in WEBP or JPEG format; may be null

### width

> **width**: [`int32`](int32.md)

Sticker width; as defined by the sender

## Defined in

dist/generated/types.d.ts:5045
