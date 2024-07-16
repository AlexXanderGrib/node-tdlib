[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getLinkPreview$Input

# Type Alias: getLinkPreview$Input

> **getLinkPreview$Input**: `object`

Returns a link preview by the text of a message. Do not call this function too often. Returns a 404 error if the text has no link preview

## Type declaration

### \_

> `readonly` **\_**: `"getLinkPreview"`

### link\_preview\_options?

> `readonly` `optional` **link\_preview\_options**: [`linkPreviewOptions$Input`](linkPreviewOptions$Input-1.md) \| `null`

Options to be used for generation of the link preview; pass null to use default link preview options

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Message text with formatting

## Defined in

dist/generated/types.d.ts:93772
