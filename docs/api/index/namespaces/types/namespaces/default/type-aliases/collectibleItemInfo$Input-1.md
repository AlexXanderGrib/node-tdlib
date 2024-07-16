[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / collectibleItemInfo$Input

# Type Alias: collectibleItemInfo$Input

> **collectibleItemInfo$Input**: `object`

Version of [collectibleItemInfo](collectibleItemInfo-1.md) for method parameters.

Contains information about a collectible item and its last purchase

## Type declaration

### \_

> `readonly` **\_**: `"collectibleItemInfo"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53-1.md)

The paid amount, in the smallest units of the currency

### cryptocurrency?

> `readonly` `optional` **cryptocurrency**: `string`

Cryptocurrency used to pay for the item

### cryptocurrency\_amount?

> `readonly` `optional` **cryptocurrency\_amount**: [`int64$Input`](int64$Input-1.md)

The paid amount, in the smallest units of the cryptocurrency

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the paid amount

### purchase\_date?

> `readonly` `optional` **purchase\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the item was purchased

### url?

> `readonly` `optional` **url**: `string`

Individual URL for the item on https://fragment.com

## Defined in

dist/generated/types.d.ts:22101
