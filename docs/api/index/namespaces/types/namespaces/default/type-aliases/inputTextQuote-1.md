[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputTextQuote

# Type Alias: inputTextQuote

> **inputTextQuote**: `object`

Describes manually chosen quote from another message

## Type declaration

### \_

> **\_**: `"inputTextQuote"`

### position

> **position**: [`int32`](int32-1.md)

Quote position in the original message in UTF-16 code units

### text

> **text**: [`formattedText`](formattedText-1.md)

Text of the quote; 0-getOption("message_reply_quote_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed to be kept and must be kept in the quote

## Defined in

dist/generated/types.d.ts:13101
