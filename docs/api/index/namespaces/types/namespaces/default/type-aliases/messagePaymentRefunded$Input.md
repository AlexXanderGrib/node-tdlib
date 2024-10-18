[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentRefunded$Input

# Type Alias: messagePaymentRefunded$Input

> **messagePaymentRefunded$Input**: `object`

Version of [messagePaymentRefunded](messagePaymentRefunded.md) for method parameters.

A payment has been refunded

## Type declaration

### \_

> `readonly` **\_**: `"messagePaymentRefunded"`

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the price of the product

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: [`bytes$Input`](bytes$Input.md)

Invoice payload; only for bots

### owner\_id?

> `readonly` `optional` **owner\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the previous owner of the Telegram Stars that refunds them

### provider\_payment\_charge\_id?

> `readonly` `optional` **provider\_payment\_charge\_id**: `string`

Provider payment identifier

### telegram\_payment\_charge\_id?

> `readonly` `optional` **telegram\_payment\_charge\_id**: `string`

Telegram payment identifier

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int53`](int53.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:28487
