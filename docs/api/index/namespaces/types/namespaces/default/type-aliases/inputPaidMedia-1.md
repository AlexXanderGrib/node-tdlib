[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputPaidMedia

# Type Alias: inputPaidMedia

> **inputPaidMedia**: `object`

Describes a paid media to be sent

## Type declaration

### \_

> **\_**: `"inputPaidMedia"`

### added\_sticker\_file\_ids

> **added\_sticker\_file\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the media, if applicable

### height

> **height**: [`int32`](int32-1.md)

Media height

### media

> **media**: [`InputFile`](InputFile.md)

Photo or video to be sent

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail-1.md) \| `null`

Media thumbnail; pass null to skip thumbnail uploading

### type

> **type**: [`InputPaidMediaType`](InputPaidMediaType.md)

Type of the media

### width

> **width**: [`int32`](int32-1.md)

Media width

## Defined in

dist/generated/types.d.ts:28927
