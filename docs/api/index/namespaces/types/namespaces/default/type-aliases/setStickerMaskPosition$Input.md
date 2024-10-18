[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setStickerMaskPosition$Input

# Type Alias: setStickerMaskPosition$Input

> **setStickerMaskPosition$Input**: `object`

Changes the mask position of a mask sticker. The sticker must belong to a mask sticker set that is owned by the current user

## Type declaration

### \_

> `readonly` **\_**: `"setStickerMaskPosition"`

### mask\_position?

> `readonly` `optional` **mask\_position**: [`maskPosition$Input`](maskPosition$Input.md) \| `null`

Position where the mask is placed; pass null to remove mask position

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker

## Defined in

dist/generated/types.d.ts:103057
