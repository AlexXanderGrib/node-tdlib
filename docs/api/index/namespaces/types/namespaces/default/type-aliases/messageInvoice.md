[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageInvoice

# Type Alias: messageInvoice

> **messageInvoice**: `object`

A message with an invoice from a bot. Use getInternalLink with internalLinkTypeBotStart to share the invoice

## Type declaration

### \_

> **\_**: `"messageInvoice"`

### currency

> **currency**: `string`

Currency for the product price

### is\_test

> **is\_test**: [`Bool`](Bool.md)

True, if the invoice is a test invoice

### need\_shipping\_address

> **need\_shipping\_address**: [`Bool`](Bool.md)

True, if the shipping address must be specified

### paid\_media

> **paid\_media**: [`PaidMedia`](PaidMedia.md) \| `null`

Extended media attached to the invoice; may be null if none

### paid\_media\_caption

> **paid\_media\_caption**: [`formattedText`](formattedText.md) \| `null`

Extended media caption; may be null if none

### product\_info

> **product\_info**: [`productInfo`](productInfo.md)

Information about the product

### receipt\_message\_id

> **receipt\_message\_id**: [`int53`](int53.md)

The identifier of the message with the receipt, after the product has been purchased

### start\_parameter

> **start\_parameter**: `string`

Unique invoice bot start_parameter to be passed to getInternalLink

### total\_amount

> **total\_amount**: [`int53`](int53.md)

Product total price in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:27361
