[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageInvoice$Input

# Type Alias: inputMessageInvoice$Input

> **inputMessageInvoice$Input**: `object`

Version of [inputMessageInvoice](inputMessageInvoice.md) for method parameters.

A message with an invoice; can be used only by bots

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageInvoice"`

### description?

> `readonly` `optional` **description**: `string`

A message with an invoice; can be used only by bots

### invoice?

> `readonly` `optional` **invoice**: [`invoice$Input`](invoice$Input-1.md)

Invoice

### paid\_media?

> `readonly` `optional` **paid\_media**: [`inputPaidMedia$Input`](inputPaidMedia$Input-1.md) \| `null`

The content of paid media attached to the invoice; pass null if none

### paid\_media\_caption?

> `readonly` `optional` **paid\_media\_caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Paid media caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### payload?

> `readonly` `optional` **payload**: [`bytes$Input`](bytes$Input-1.md)

The invoice payload

### photo\_height?

> `readonly` `optional` **photo\_height**: [`int32`](int32-1.md)

Product photo height

### photo\_size?

> `readonly` `optional` **photo\_size**: [`int32`](int32-1.md)

Product photo size

### photo\_url?

> `readonly` `optional` **photo\_url**: `string`

Product photo URL; optional

### photo\_width?

> `readonly` `optional` **photo\_width**: [`int32`](int32-1.md)

Product photo width

### provider\_data?

> `readonly` `optional` **provider\_data**: `string`

JSON-encoded data about the invoice, which will be shared with the payment provider

### provider\_token?

> `readonly` `optional` **provider\_token**: `string`

Payment provider token; may be empty for payments in Telegram Stars

### start\_parameter?

> `readonly` `optional` **start\_parameter**: `string`

Unique invoice bot deep link parameter for the generation of this invoice. If empty, it would be possible to pay directly from forwards of the invoice message

### title?

> `readonly` `optional` **title**: `string`

Product title; 1-32 characters

## Defined in

dist/generated/types.d.ts:30222
