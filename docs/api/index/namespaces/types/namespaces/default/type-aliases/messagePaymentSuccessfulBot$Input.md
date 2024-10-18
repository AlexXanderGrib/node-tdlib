[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentSuccessfulBot$Input

# Type Alias: messagePaymentSuccessfulBot$Input

> **messagePaymentSuccessfulBot$Input**: `object`

Version of [messagePaymentSuccessfulBot](messagePaymentSuccessfulBot.md) for method parameters.

A payment has been completed; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"messagePaymentSuccessfulBot"`

### currency?

> `readonly` `optional` **currency**: `string`

Currency for price of the product

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: [`bytes$Input`](bytes$Input.md)

Invoice payload

### is\_first\_recurring?

> `readonly` `optional` **is\_first\_recurring**: [`Bool$Input`](Bool$Input.md)

True, if this is the first recurring payment

### is\_recurring?

> `readonly` `optional` **is\_recurring**: [`Bool$Input`](Bool$Input.md)

True, if this is a recurring payment

### order\_info?

> `readonly` `optional` **order\_info**: [`orderInfo$Input`](orderInfo$Input.md) \| `null`

Information about the order; may be null

### provider\_payment\_charge\_id?

> `readonly` `optional` **provider\_payment\_charge\_id**: `string`

Provider payment identifier

### shipping\_option\_id?

> `readonly` `optional` **shipping\_option\_id**: `string`

Identifier of the shipping option chosen by the user; may be empty if not applicable

### telegram\_payment\_charge\_id?

> `readonly` `optional` **telegram\_payment\_charge\_id**: `string`

Telegram payment identifier

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int53`](int53.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:28398
