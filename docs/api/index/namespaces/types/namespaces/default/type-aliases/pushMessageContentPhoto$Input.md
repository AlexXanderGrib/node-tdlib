[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentPhoto$Input

# Type Alias: pushMessageContentPhoto$Input

> **pushMessageContentPhoto$Input**: `object`

Version of [pushMessageContentPhoto](pushMessageContentPhoto.md) for method parameters.

A photo message

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentPhoto"`

### caption?

> `readonly` `optional` **caption**: `string`

Photo caption

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the photo is secret

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input.md) \| `null`

Message content; may be null

## Defined in

dist/generated/types.d.ts:46039
