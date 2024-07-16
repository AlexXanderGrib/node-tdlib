[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageVideo$Input

# Type Alias: messageVideo$Input

> **messageVideo$Input**: `object`

Version of [messageVideo](messageVideo.md) for method parameters.

A video message

## Type declaration

### \_

> `readonly` **\_**: `"messageVideo"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md)

Video caption

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the video preview must be covered by a spoiler animation

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the video thumbnail must be blurred and the video must be shown only while tapped

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the video; otherwise, the caption must be shown below the video

### video?

> `readonly` `optional` **video**: [`video$Input`](video$Input-1.md)

The video description

## Defined in

dist/generated/types.d.ts:26124
