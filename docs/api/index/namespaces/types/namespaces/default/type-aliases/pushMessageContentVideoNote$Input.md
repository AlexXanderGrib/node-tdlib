[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentVideoNote$Input

# Type Alias: pushMessageContentVideoNote$Input

> **pushMessageContentVideoNote$Input**: `object`

Version of [pushMessageContentVideoNote](pushMessageContentVideoNote.md) for method parameters.

A video note message

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentVideoNote"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### video\_note?

> `readonly` `optional` **video\_note**: [`videoNote$Input`](videoNote$Input-1.md) \| `null`

Message content; may be null

## Defined in

dist/generated/types.d.ts:44839
