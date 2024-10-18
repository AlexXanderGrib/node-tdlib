[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeMessageDraft

# Type Alias: internalLinkTypeMessageDraft

> **internalLinkTypeMessageDraft**: `object`

The link contains a message draft text. A share screen needs to be shown to the user, then the chosen chat must be opened and the text is added to the input field

## Type declaration

### \_

> **\_**: `"internalLinkTypeMessageDraft"`

### contains\_link

> **contains\_link**: [`Bool`](Bool.md)

True, if the first line of the text contains a link. If true, the input field needs to be focused and the text after the link must be selected

### text

> **text**: [`formattedText`](formattedText.md)

Message draft text

## Defined in

dist/generated/types.d.ts:49583
