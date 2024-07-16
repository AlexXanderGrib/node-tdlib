[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageText$Input

# Type Alias: inputMessageText$Input

> **inputMessageText$Input**: `object`

Version of [inputMessageText](inputMessageText.md) for method parameters.

A text message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageText"`

### clear\_draft?

> `readonly` `optional` **clear\_draft**: [`Bool$Input`](Bool$Input.md)

True, if a chat message draft must be deleted

### link\_preview\_options?

> `readonly` `optional` **link\_preview\_options**: [`linkPreviewOptions$Input`](linkPreviewOptions$Input-1.md) \| `null`

Options to be used for generation of a link preview; may be null if none; pass null to use default link preview options

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Formatted text to be sent; 0-getOption("message_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote,

- Code, Pre, PreCode, TextUrl and MentionName entities are allowed to be specified manually

## Defined in

dist/generated/types.d.ts:29250
