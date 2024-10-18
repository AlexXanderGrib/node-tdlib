[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / formattedText

# Type Alias: formattedText

> **formattedText**: `object`

A text with some entities

## Type declaration

### \_

> **\_**: `"formattedText"`

### entities

> **entities**: [`vector`](vector.md)\<[`textEntity`](textEntity.md)\>

Entities contained in the text. Entities can be nested, but must not mutually intersect with each other.

- Pre, Code and PreCode entities can't contain other entities. BlockQuote entities can't contain other BlockQuote entities. Bold, Italic, Underline, Strikethrough, and Spoiler entities can contain and can be part of any other entities. All other entities can't contain each other

### text

> **text**: `string`

The text

## Defined in

dist/generated/types.d.ts:3105
