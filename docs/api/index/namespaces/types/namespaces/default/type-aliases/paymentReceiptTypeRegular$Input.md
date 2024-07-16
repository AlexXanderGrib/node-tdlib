[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentReceiptTypeRegular$Input

# Type Alias: paymentReceiptTypeRegular$Input

> **paymentReceiptTypeRegular$Input**: `object`

Version of [paymentReceiptTypeRegular](paymentReceiptTypeRegular.md) for method parameters.

The payment was done using a third-party payment provider

## Type declaration

### \_

> `readonly` **\_**: `"paymentReceiptTypeRegular"`

### credentials\_title?

> `readonly` `optional` **credentials\_title**: `string`

Title of the saved credentials chosen by the buyer

### invoice?

> `readonly` `optional` **invoice**: [`invoice$Input`](invoice$Input-1.md)

Information about the invoice

### order\_info?

> `readonly` `optional` **order\_info**: [`orderInfo$Input`](orderInfo$Input-1.md) \| `null`

Order information; may be null

### payment\_provider\_user\_id?

> `readonly` `optional` **payment\_provider\_user\_id**: [`int53`](int53-1.md)

User identifier of the payment provider bot

### shipping\_option?

> `readonly` `optional` **shipping\_option**: [`shippingOption$Input`](shippingOption$Input-1.md) \| `null`

Chosen shipping option; may be null

### tip\_amount?

> `readonly` `optional` **tip\_amount**: [`int53`](int53-1.md)

The amount of tip chosen by the buyer in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:23337
