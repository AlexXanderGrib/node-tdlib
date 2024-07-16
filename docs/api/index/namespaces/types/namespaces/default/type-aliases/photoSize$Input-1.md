[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / photoSize$Input

# Type Alias: photoSize$Input

> **photoSize$Input**: `object`

Version of [photoSize](photoSize-1.md) for method parameters.

Describes an image in JPEG format

## Type declaration

### \_

> `readonly` **\_**: `"photoSize"`

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Image height

### photo?

> `readonly` `optional` **photo**: [`file$Input`](file$Input-1.md)

Information about the image file

### progressive\_sizes?

> `readonly` `optional` **progressive\_sizes**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

Sizes of progressive JPEG file prefixes, which can be used to preliminarily show the image; in bytes

### type?

> `readonly` `optional` **type**: `string`

Image type (see https://core.telegram.org/constructor/photoSize)

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Image width

## Defined in

dist/generated/types.d.ts:4034
