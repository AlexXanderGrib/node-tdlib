[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendPaymentForm$DirectInput

# Type Alias: sendPaymentForm$DirectInput

> **sendPaymentForm$DirectInput**: `object`

Sends a filled-out payment form to the bot for final verification

## Type declaration

### credentials?

> `readonly` `optional` **credentials**: [`InputCredentials$Input`](InputCredentials$Input.md) \| `null`

The credentials chosen by user for payment; pass null for a payment in Telegram stars

### input\_invoice?

> `readonly` `optional` **input\_invoice**: [`InputInvoice$Input`](InputInvoice$Input.md)

The invoice

### order\_info\_id?

> `readonly` `optional` **order\_info\_id**: `string`

Identifier returned by validateOrderInfo, or an empty string

### payment\_form\_id?

> `readonly` `optional` **payment\_form\_id**: [`int64$Input`](int64$Input-1.md)

Payment form identifier returned by getPaymentForm

### shipping\_option\_id?

> `readonly` `optional` **shipping\_option\_id**: `string`

Identifier of a chosen shipping option, if applicable

### tip\_amount?

> `readonly` `optional` **tip\_amount**: [`int53`](int53-1.md)

Chosen by the user amount of tip in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:96884
