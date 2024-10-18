[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeMessageDraft$Input

# Type Alias: internalLinkTypeMessageDraft$Input

> **internalLinkTypeMessageDraft$Input**: `object`

Version of [internalLinkTypeMessageDraft](internalLinkTypeMessageDraft.md) for method parameters.

The link contains a message draft text. A share screen needs to be shown to the user, then the chosen chat must be opened and the text is added to the input field

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeMessageDraft"`

### contains\_link?

> `readonly` `optional` **contains\_link**: [`Bool$Input`](Bool$Input.md)

True, if the first line of the text contains a link. If true, the input field needs to be focused and the text after the link must be selected

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input.md)

Message draft text

## Defined in

dist/generated/types.d.ts:49601
