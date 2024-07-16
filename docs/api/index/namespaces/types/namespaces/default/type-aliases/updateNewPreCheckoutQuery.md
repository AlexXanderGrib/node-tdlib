[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewPreCheckoutQuery

# Type Alias: updateNewPreCheckoutQuery

> **updateNewPreCheckoutQuery**: `object`

A new incoming pre-checkout query; for bots only. Contains full information about a checkout

## Type declaration

### \_

> **\_**: `"updateNewPreCheckoutQuery"`

### currency

> **currency**: `string`

Currency for the product price

### id

> **id**: [`int64`](int64-1.md)

Unique query identifier

### invoice\_payload

> **invoice\_payload**: [`bytes`](bytes-1.md)

Invoice payload

### order\_info

> **order\_info**: [`orderInfo`](orderInfo-1.md) \| `null`

Information about the order; may be null

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

### shipping\_option\_id

> **shipping\_option\_id**: `string`

Identifier of a shipping option chosen by the user; may be empty if not applicable

### total\_amount

> **total\_amount**: [`int53`](int53-1.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:57651
