[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewPreCheckoutQuery$Input

# Type Alias: updateNewPreCheckoutQuery$Input

> **updateNewPreCheckoutQuery$Input**: `object`

Version of [updateNewPreCheckoutQuery](updateNewPreCheckoutQuery.md) for method parameters.

A new incoming pre-checkout query; for bots only. Contains full information about a checkout

## Type declaration

### \_

> `readonly` **\_**: `"updateNewPreCheckoutQuery"`

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the product price

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique query identifier

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: [`bytes$Input`](bytes$Input.md)

Invoice payload

### order\_info?

> `readonly` `optional` **order\_info**: [`orderInfo$Input`](orderInfo$Input.md) \| `null`

Information about the order; may be null

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53.md)

Identifier of the user who sent the query

### shipping\_option\_id?

> `readonly` `optional` **shipping\_option\_id**: `string`

Identifier of a shipping option chosen by the user; may be empty if not applicable

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int53`](int53.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:59334
