[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentReceipt$Input

# Type Alias: paymentReceipt$Input

> **paymentReceipt$Input**: `object`

Version of [paymentReceipt](paymentReceipt.md) for method parameters.

Contains information about a successful payment

## Type declaration

### \_

> `readonly` **\_**: `"paymentReceipt"`

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the payment was made

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input.md)

Information about the product

### seller\_bot\_user\_id?

> `readonly` `optional` **seller\_bot\_user\_id**: [`int53`](int53.md)

User identifier of the seller bot

### type?

> `readonly` `optional` **type**: [`PaymentReceiptType$Input`](PaymentReceiptType$Input.md)

Type of the payment receipt

## Defined in

dist/generated/types.d.ts:24195
