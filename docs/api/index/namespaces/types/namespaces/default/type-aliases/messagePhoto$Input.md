[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePhoto$Input

# Type Alias: messagePhoto$Input

> **messagePhoto$Input**: `object`

Version of [messagePhoto](messagePhoto.md) for method parameters.

A photo message

## Type declaration

### \_

> `readonly` **\_**: `"messagePhoto"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md)

Photo caption

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the photo preview must be covered by a spoiler animation

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the photo must be blurred and must be shown only while tapped

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input.md)

The photo

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the photo; otherwise, the caption must be shown below the photo

## Defined in

dist/generated/types.d.ts:26786
