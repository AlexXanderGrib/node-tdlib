[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputThumbnail$Input

# Type Alias: inputThumbnail$Input

> **inputThumbnail$Input**: `object`

Version of [inputThumbnail](inputThumbnail.md) for method parameters.

A thumbnail to be sent along with a file; must be in JPEG or WEBP format for stickers, and less than 200 KB in size

## Type declaration

### \_

> `readonly` **\_**: `"inputThumbnail"`

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown

### thumbnail?

> `readonly` `optional` **thumbnail**: [`InputFile$Input`](InputFile$Input.md)

Thumbnail file to send. Sending thumbnails by file_id is currently not supported

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown

## Defined in

dist/generated/types.d.ts:29732
