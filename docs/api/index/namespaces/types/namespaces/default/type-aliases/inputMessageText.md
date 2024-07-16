[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageText

# Type Alias: inputMessageText

> **inputMessageText**: `object`

A text message

## Type declaration

### \_

> **\_**: `"inputMessageText"`

### clear\_draft

> **clear\_draft**: [`Bool`](Bool.md)

True, if a chat message draft must be deleted

### link\_preview\_options

> **link\_preview\_options**: [`linkPreviewOptions`](linkPreviewOptions-1.md) \| `null`

Options to be used for generation of a link preview; may be null if none; pass null to use default link preview options

### text

> **text**: [`formattedText`](formattedText-1.md)

Formatted text to be sent; 0-getOption("message_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote,

- Code, Pre, PreCode, TextUrl and MentionName entities are allowed to be specified manually

## Defined in

dist/generated/types.d.ts:29225
