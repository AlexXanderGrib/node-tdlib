[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputChatPhotoAnimation$Input

# Type Alias: inputChatPhotoAnimation$Input

> **inputChatPhotoAnimation$Input**: `object`

Version of [inputChatPhotoAnimation](inputChatPhotoAnimation.md) for method parameters.

An animation in MPEG4 format; must be square, at most 10 seconds long, have width between 160 and 1280 and be at most 2MB in size

## Type declaration

### \_

> `readonly` **\_**: `"inputChatPhotoAnimation"`

### animation?

> `readonly` `optional` **animation**: [`InputFile$Input`](InputFile$Input.md)

Animation to be set as profile photo. Only inputFileLocal and inputFileGenerated are allowed

### main\_frame\_timestamp?

> `readonly` `optional` **main\_frame\_timestamp**: [`double`](double-1.md)

Timestamp of the frame, which will be used as static chat photo

## Defined in

dist/generated/types.d.ts:7545
