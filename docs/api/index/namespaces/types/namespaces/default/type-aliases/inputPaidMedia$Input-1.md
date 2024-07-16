[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputPaidMedia$Input

# Type Alias: inputPaidMedia$Input

> **inputPaidMedia$Input**: `object`

Version of [inputPaidMedia](inputPaidMedia-1.md) for method parameters.

Describes a paid media to be sent

## Type declaration

### \_

> `readonly` **\_**: `"inputPaidMedia"`

### added\_sticker\_file\_ids?

> `readonly` `optional` **added\_sticker\_file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the media, if applicable

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Media height

### media?

> `readonly` `optional` **media**: [`InputFile$Input`](InputFile$Input.md)

Photo or video to be sent

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input-1.md) \| `null`

Media thumbnail; pass null to skip thumbnail uploading

### type?

> `readonly` `optional` **type**: [`InputPaidMediaType$Input`](InputPaidMediaType$Input.md)

Type of the media

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Media width

## Defined in

dist/generated/types.d.ts:28965
