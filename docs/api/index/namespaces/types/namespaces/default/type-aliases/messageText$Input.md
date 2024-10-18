[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageText$Input

# Type Alias: messageText$Input

> **messageText$Input**: `object`

Version of [messageText](messageText.md) for method parameters.

A text message

## Type declaration

### \_

> `readonly` **\_**: `"messageText"`

### link\_preview?

> `readonly` `optional` **link\_preview**: [`linkPreview$Input`](linkPreview$Input.md) \| `null`

A link preview attached to the message; may be null

### link\_preview\_options?

> `readonly` `optional` **link\_preview\_options**: [`linkPreviewOptions$Input`](linkPreviewOptions$Input.md) \| `null`

Options which were used for generation of the link preview; may be null if default options were used

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input.md)

Text of the message

## Defined in

dist/generated/types.d.ts:26546
