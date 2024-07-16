[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewShippingQuery

# Type Alias: updateNewShippingQuery

> **updateNewShippingQuery**: `object`

A new incoming shipping query; for bots only. Only for invoices with flexible price

## Type declaration

### \_

> **\_**: `"updateNewShippingQuery"`

### id

> **id**: [`int64`](int64-1.md)

Unique query identifier

### invoice\_payload

> **invoice\_payload**: `string`

Invoice payload

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

### shipping\_address

> **shipping\_address**: [`address`](address-1.md)

User shipping address

## Defined in

dist/generated/types.d.ts:57597
