[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaidMedia$Input

# Type Alias: messagePaidMedia$Input

> **messagePaidMedia$Input**: `object`

Version of [messagePaidMedia](messagePaidMedia.md) for method parameters.

A message with paid media

## Type declaration

### \_

> `readonly` **\_**: `"messagePaidMedia"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md)

Media caption

### media?

> `readonly` `optional` **media**: [`vector$Input`](vector$Input.md)\<[`PaidMedia$Input`](PaidMedia$Input.md)\>

Information about the media

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the media; otherwise, the caption must be shown below the media

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53-1.md)

Number of stars needed to buy access to the media in the message

## Defined in

dist/generated/types.d.ts:25967
