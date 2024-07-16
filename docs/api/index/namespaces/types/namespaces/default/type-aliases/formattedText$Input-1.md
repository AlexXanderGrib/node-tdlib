[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / formattedText$Input

# Type Alias: formattedText$Input

> **formattedText$Input**: `object`

Version of [formattedText](formattedText-1.md) for method parameters.

A text with some entities

## Type declaration

### \_

> `readonly` **\_**: `"formattedText"`

### entities?

> `readonly` `optional` **entities**: [`vector$Input`](vector$Input.md)\<[`textEntity$Input`](textEntity$Input-1.md)\>

Entities contained in the text. Entities can be nested, but must not mutually intersect with each other.

- Pre, Code and PreCode entities can't contain other entities. BlockQuote entities can't contain other BlockQuote entities. Bold, Italic, Underline, Strikethrough, and Spoiler entities can contain and can be part of any other entities. All other entities can't contain each other

### text?

> `readonly` `optional` **text**: `string`

The text

## Defined in

dist/generated/types.d.ts:3079
