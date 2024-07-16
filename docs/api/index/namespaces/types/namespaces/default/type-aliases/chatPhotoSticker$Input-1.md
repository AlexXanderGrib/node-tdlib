[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPhotoSticker$Input

# Type Alias: chatPhotoSticker$Input

> **chatPhotoSticker$Input**: `object`

Version of [chatPhotoSticker](chatPhotoSticker-1.md) for method parameters.

Information about the sticker, which was used to create the chat photo. The sticker is shown at the center of the photo and occupies at most 67% of it

## Type declaration

### \_

> `readonly` **\_**: `"chatPhotoSticker"`

### background\_fill?

> `readonly` `optional` **background\_fill**: [`BackgroundFill$Input`](BackgroundFill$Input.md)

The fill to be used as background for the sticker; rotation angle in backgroundFillGradient isn't supported

### type?

> `readonly` `optional` **type**: [`ChatPhotoStickerType$Input`](ChatPhotoStickerType$Input.md)

Type of the sticker

## Defined in

dist/generated/types.d.ts:7301
