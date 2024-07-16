[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputTextQuote$Input

# Type Alias: inputTextQuote$Input

> **inputTextQuote$Input**: `object`

Version of [inputTextQuote](inputTextQuote-1.md) for method parameters.

Describes manually chosen quote from another message

## Type declaration

### \_

> `readonly` **\_**: `"inputTextQuote"`

### position?

> `readonly` `optional` **position**: [`int32`](int32-1.md)

Quote position in the original message in UTF-16 code units

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Text of the quote; 0-getOption("message_reply_quote_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed to be kept and must be kept in the quote

## Defined in

dist/generated/types.d.ts:13119
