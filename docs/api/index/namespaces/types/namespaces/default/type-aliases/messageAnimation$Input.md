[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageAnimation$Input

# Type Alias: messageAnimation$Input

> **messageAnimation$Input**: `object`

Version of [messageAnimation](messageAnimation.md) for method parameters.

An animation message (GIF-style).

## Type declaration

### \_

> `readonly` **\_**: `"messageAnimation"`

### animation?

> `readonly` `optional` **animation**: [`animation$Input`](animation$Input.md)

The animation description

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md)

Animation caption

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the animation preview must be covered by a spoiler animation

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the animation thumbnail must be blurred and the animation must be shown only while tapped

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the animation; otherwise, the caption must be shown below the animation

## Defined in

dist/generated/types.d.ts:26600
