[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageInvoice

# Type Alias: inputMessageInvoice

> **inputMessageInvoice**: `object`

A message with an invoice; can be used only by bots

## Type declaration

### \_

> **\_**: `"inputMessageInvoice"`

### description

> **description**: `string`

A message with an invoice; can be used only by bots

### invoice

> **invoice**: [`invoice`](invoice-1.md)

Invoice

### paid\_media

> **paid\_media**: [`inputPaidMedia`](inputPaidMedia-1.md) \| `null`

The content of paid media attached to the invoice; pass null if none

### paid\_media\_caption

> **paid\_media\_caption**: [`formattedText`](formattedText-1.md) \| `null`

Paid media caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### payload

> **payload**: [`bytes`](bytes-1.md)

The invoice payload

### photo\_height

> **photo\_height**: [`int32`](int32-1.md)

Product photo height

### photo\_size

> **photo\_size**: [`int32`](int32-1.md)

Product photo size

### photo\_url

> **photo\_url**: `string`

Product photo URL; optional

### photo\_width

> **photo\_width**: [`int32`](int32-1.md)

Product photo width

### provider\_data

> **provider\_data**: `string`

JSON-encoded data about the invoice, which will be shared with the payment provider

### provider\_token

> **provider\_token**: `string`

Payment provider token; may be empty for payments in Telegram Stars

### start\_parameter

> **start\_parameter**: `string`

Unique invoice bot deep link parameter for the generation of this invoice. If empty, it would be possible to pay directly from forwards of the invoice message

### title

> **title**: `string`

Product title; 1-32 characters

## Defined in

dist/generated/types.d.ts:30149
