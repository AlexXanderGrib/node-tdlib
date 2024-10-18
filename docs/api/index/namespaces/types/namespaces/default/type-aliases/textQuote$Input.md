[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / textQuote$Input

# Type Alias: textQuote$Input

> **textQuote$Input**: `object`

Version of [textQuote](textQuote.md) for method parameters.

Describes manually or automatically chosen quote from another message

## Type declaration

### \_

> `readonly` **\_**: `"textQuote"`

### is\_manual?

> `readonly` `optional` **is\_manual**: [`Bool$Input`](Bool$Input.md)

True, if the quote was manually chosen by the message sender

### position?

> `readonly` `optional` **position**: [`int32`](int32.md)

Approximate quote position in the original message in UTF-16 code units as specified by the message sender

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input.md)

Text of the quote. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities can be present in the text

## Defined in

dist/generated/types.d.ts:13782
