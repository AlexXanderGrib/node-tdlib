[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentRefunded

# Type Alias: messagePaymentRefunded

> **messagePaymentRefunded**: `object`

A payment has been refunded

## Type declaration

### \_

> **\_**: `"messagePaymentRefunded"`

### currency

> **currency**: `string`

Currency for the price of the product

### invoice\_payload

> **invoice\_payload**: [`bytes`](bytes-1.md)

Invoice payload; only for bots

### owner\_id

> **owner\_id**: [`MessageSender`](MessageSender.md)

Identifier of the previous owner of the Telegram stars that refunds them

### provider\_payment\_charge\_id

> **provider\_payment\_charge\_id**: `string`

Provider payment identifier

### telegram\_payment\_charge\_id

> **telegram\_payment\_charge\_id**: `string`

Telegram payment identifier

### total\_amount

> **total\_amount**: [`int53`](int53-1.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:27689
