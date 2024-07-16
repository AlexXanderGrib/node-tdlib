[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageInvoice$Input

# Type Alias: messageInvoice$Input

> **messageInvoice$Input**: `object`

Version of [messageInvoice](messageInvoice.md) for method parameters.

A message with an invoice from a bot. Use getInternalLink with internalLinkTypeBotStart to share the invoice

## Type declaration

### \_

> `readonly` **\_**: `"messageInvoice"`

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the product price

### is\_test?

> `readonly` `optional` **is\_test**: [`Bool$Input`](Bool$Input.md)

True, if the invoice is a test invoice

### need\_shipping\_address?

> `readonly` `optional` **need\_shipping\_address**: [`Bool$Input`](Bool$Input.md)

True, if the shipping address must be specified

### paid\_media?

> `readonly` `optional` **paid\_media**: [`PaidMedia$Input`](PaidMedia$Input.md) \| `null`

Extended media attached to the invoice; may be null if none

### paid\_media\_caption?

> `readonly` `optional` **paid\_media\_caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Extended media caption; may be null if none

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input-1.md)

Information about the product

### receipt\_message\_id?

> `readonly` `optional` **receipt\_message\_id**: [`int53`](int53-1.md)

The identifier of the message with the receipt, after the product has been purchased

### start\_parameter?

> `readonly` `optional` **start\_parameter**: `string`

Unique invoice bot start_parameter to be passed to getInternalLink

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int53`](int53-1.md)

Product total price in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:26654
