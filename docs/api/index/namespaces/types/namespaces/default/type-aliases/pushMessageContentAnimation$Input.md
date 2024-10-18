[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentAnimation$Input

# Type Alias: pushMessageContentAnimation$Input

> **pushMessageContentAnimation$Input**: `object`

Version of [pushMessageContentAnimation](pushMessageContentAnimation.md) for method parameters.

An animation message (GIF-style).

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentAnimation"`

### animation?

> `readonly` `optional` **animation**: [`animation$Input`](animation$Input.md) \| `null`

Message content; may be null

### caption?

> `readonly` `optional` **caption**: `string`

Animation caption

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

## Defined in

dist/generated/types.d.ts:45694
