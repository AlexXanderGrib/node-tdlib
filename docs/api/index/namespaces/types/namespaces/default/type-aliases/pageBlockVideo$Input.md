[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockVideo$Input

# Type Alias: pageBlockVideo$Input

> **pageBlockVideo$Input**: `object`

Version of [pageBlockVideo](pageBlockVideo.md) for method parameters.

A video

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockVideo"`

### caption?

> `readonly` `optional` **caption**: [`pageBlockCaption$Input`](pageBlockCaption$Input-1.md)

Video caption

### is\_looped?

> `readonly` `optional` **is\_looped**: [`Bool$Input`](Bool$Input.md)

True, if the video must be looped

### need\_autoplay?

> `readonly` `optional` **need\_autoplay**: [`Bool$Input`](Bool$Input.md)

True, if the video must be played automatically

### video?

> `readonly` `optional` **video**: [`video$Input`](video$Input-1.md) \| `null`

Video file; may be null

## Defined in

dist/generated/types.d.ts:20155
