[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentSticker$Input

# Type Alias: pushMessageContentSticker$Input

> **pushMessageContentSticker$Input**: `object`

Version of [pushMessageContentSticker](pushMessageContentSticker.md) for method parameters.

A message with a sticker

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentSticker"`

### emoji?

> `readonly` `optional` **emoji**: `string`

Emoji corresponding to the sticker; may be empty

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input.md) \| `null`

Message content; may be null

## Defined in

dist/generated/types.d.ts:46214
