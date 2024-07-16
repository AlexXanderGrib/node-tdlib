[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageSticker$Input

# Type Alias: inputMessageSticker$Input

> **inputMessageSticker$Input**: `object`

Version of [inputMessageSticker](inputMessageSticker.md) for method parameters.

A sticker message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageSticker"`

### emoji?

> `readonly` `optional` **emoji**: `string`

Emoji used to choose the sticker

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Sticker height

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker to be sent

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input-1.md) \| `null`

Sticker thumbnail; pass null to skip thumbnail uploading

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Sticker width

## Defined in

dist/generated/types.d.ts:29696
