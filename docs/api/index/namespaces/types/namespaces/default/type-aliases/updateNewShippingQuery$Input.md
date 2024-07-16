[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewShippingQuery$Input

# Type Alias: updateNewShippingQuery$Input

> **updateNewShippingQuery$Input**: `object`

Version of [updateNewShippingQuery](updateNewShippingQuery.md) for method parameters.

A new incoming shipping query; for bots only. Only for invoices with flexible price

## Type declaration

### \_

> `readonly` **\_**: `"updateNewShippingQuery"`

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Unique query identifier

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: `string`

Invoice payload

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

### shipping\_address?

> `readonly` `optional` **shipping\_address**: [`address$Input`](address$Input-1.md)

User shipping address

## Defined in

dist/generated/types.d.ts:57625
