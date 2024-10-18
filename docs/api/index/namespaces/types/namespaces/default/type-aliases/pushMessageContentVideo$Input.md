[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentVideo$Input

# Type Alias: pushMessageContentVideo$Input

> **pushMessageContentVideo$Input**: `object`

Version of [pushMessageContentVideo](pushMessageContentVideo.md) for method parameters.

A video message

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentVideo"`

### caption?

> `readonly` `optional` **caption**: `string`

Video caption

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the video is secret

### video?

> `readonly` `optional` **video**: [`video$Input`](video$Input.md) \| `null`

Message content; may be null

## Defined in

dist/generated/types.d.ts:46321
