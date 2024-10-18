[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / botTransactionPurposeInvoicePayment$Input

# Type Alias: botTransactionPurposeInvoicePayment$Input

> **botTransactionPurposeInvoicePayment$Input**: `object`

Version of [botTransactionPurposeInvoicePayment](botTransactionPurposeInvoicePayment.md) for method parameters.

User bought a product from the bot

## Type declaration

### \_

> `readonly` **\_**: `"botTransactionPurposeInvoicePayment"`

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: [`bytes$Input`](bytes$Input.md)

Invoice payload; for bots only

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input.md) \| `null`

Information about the bought product; may be null if not applicable

## Defined in

dist/generated/types.d.ts:8663
