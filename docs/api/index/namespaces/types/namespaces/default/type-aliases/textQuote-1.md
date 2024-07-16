[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / textQuote

# Type Alias: textQuote

> **textQuote**: `object`

Describes manually or automatically chosen quote from another message

## Type declaration

### \_

> **\_**: `"textQuote"`

### is\_manual

> **is\_manual**: [`Bool`](Bool.md)

True, if the quote was manually chosen by the message sender

### position

> **position**: [`int32`](int32-1.md)

Approximate quote position in the original message in UTF-16 code units as specified by the message sender

### text

> **text**: [`formattedText`](formattedText-1.md)

Text of the quote. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities can be present in the text

## Defined in

dist/generated/types.d.ts:13057
