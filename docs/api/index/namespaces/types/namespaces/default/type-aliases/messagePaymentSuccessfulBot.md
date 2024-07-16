[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentSuccessfulBot

# Type Alias: messagePaymentSuccessfulBot

> **messagePaymentSuccessfulBot**: `object`

A payment has been completed; for bots only

## Type declaration

### \_

> **\_**: `"messagePaymentSuccessfulBot"`

### currency

> **currency**: `string`

Currency for price of the product

### invoice\_payload

> **invoice\_payload**: [`bytes`](bytes-1.md)

Invoice payload

### is\_first\_recurring

> **is\_first\_recurring**: [`Bool`](Bool.md)

True, if this is the first recurring payment

### is\_recurring

> **is\_recurring**: [`Bool`](Bool.md)

True, if this is a recurring payment

### order\_info

> **order\_info**: [`orderInfo`](orderInfo-1.md) \| `null`

Information about the order; may be null

### provider\_payment\_charge\_id

> **provider\_payment\_charge\_id**: `string`

Provider payment identifier

### shipping\_option\_id

> **shipping\_option\_id**: `string`

Identifier of the shipping option chosen by the user; may be empty if not applicable

### telegram\_payment\_charge\_id

> **telegram\_payment\_charge\_id**: `string`

Telegram payment identifier

### total\_amount

> **total\_amount**: [`int53`](int53-1.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:27585
