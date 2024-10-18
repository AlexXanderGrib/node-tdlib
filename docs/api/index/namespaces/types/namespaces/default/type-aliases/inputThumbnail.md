[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputThumbnail

# Type Alias: inputThumbnail

> **inputThumbnail**: `object`

A thumbnail to be sent along with a file; must be in JPEG or WEBP format for stickers, and less than 200 KB in size

## Type declaration

### \_

> **\_**: `"inputThumbnail"`

### height

> **height**: [`int32`](int32.md)

Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown

### thumbnail

> **thumbnail**: [`InputFile`](InputFile.md)

Thumbnail file to send. Sending thumbnails by file_id is currently not supported

### width

> **width**: [`int32`](int32.md)

Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown

## Defined in

dist/generated/types.d.ts:29709
