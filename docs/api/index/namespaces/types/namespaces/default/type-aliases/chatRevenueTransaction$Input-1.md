[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatRevenueTransaction$Input

# Type Alias: chatRevenueTransaction$Input

> **chatRevenueTransaction$Input**: `object`

Version of [chatRevenueTransaction](chatRevenueTransaction-1.md) for method parameters.

Contains a chat revenue transactions

## Type declaration

### \_

> `readonly` **\_**: `"chatRevenueTransaction"`

### cryptocurrency?

> `readonly` `optional` **cryptocurrency**: `string`

Cryptocurrency in which revenue is calculated

### cryptocurrency\_amount?

> `readonly` `optional` **cryptocurrency\_amount**: [`int64$Input`](int64$Input-1.md)

The withdrawn amount, in the smallest units of the cryptocurrency

### type?

> `readonly` `optional` **type**: [`ChatRevenueTransactionType$Input`](ChatRevenueTransactionType$Input.md)

Type of the transaction

## Defined in

dist/generated/types.d.ts:52176
