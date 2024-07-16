[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentReceiptTypeRegular

# Type Alias: paymentReceiptTypeRegular

> **paymentReceiptTypeRegular**: `object`

The payment was done using a third-party payment provider

## Type declaration

### \_

> **\_**: `"paymentReceiptTypeRegular"`

### credentials\_title

> **credentials\_title**: `string`

Title of the saved credentials chosen by the buyer

### invoice

> **invoice**: [`invoice`](invoice-1.md)

Information about the invoice

### order\_info

> **order\_info**: [`orderInfo`](orderInfo-1.md) \| `null`

Order information; may be null

### payment\_provider\_user\_id

> **payment\_provider\_user\_id**: [`int53`](int53-1.md)

User identifier of the payment provider bot

### shipping\_option

> **shipping\_option**: [`shippingOption`](shippingOption-1.md) \| `null`

Chosen shipping option; may be null

### tip\_amount

> **tip\_amount**: [`int53`](int53-1.md)

The amount of tip chosen by the buyer in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:23299
