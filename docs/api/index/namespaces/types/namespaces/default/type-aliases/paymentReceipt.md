[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentReceipt

# Type Alias: paymentReceipt

> **paymentReceipt**: `object`

Contains information about a successful payment

## Type declaration

### \_

> **\_**: `"paymentReceipt"`

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the payment was made

### product\_info

> **product\_info**: [`productInfo`](productInfo.md)

Information about the product

### seller\_bot\_user\_id

> **seller\_bot\_user\_id**: [`int53`](int53.md)

User identifier of the seller bot

### type

> **type**: [`PaymentReceiptType`](PaymentReceiptType.md)

Type of the payment receipt

## Defined in

dist/generated/types.d.ts:24167
