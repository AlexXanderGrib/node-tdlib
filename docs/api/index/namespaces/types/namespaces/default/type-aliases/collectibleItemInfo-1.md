[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / collectibleItemInfo

# Type Alias: collectibleItemInfo

> **collectibleItemInfo**: `object`

Contains information about a collectible item and its last purchase

## Type declaration

### \_

> **\_**: `"collectibleItemInfo"`

### amount

> **amount**: [`int53`](int53-1.md)

The paid amount, in the smallest units of the currency

### cryptocurrency

> **cryptocurrency**: `string`

Cryptocurrency used to pay for the item

### cryptocurrency\_amount

> **cryptocurrency\_amount**: [`int64`](int64-1.md)

The paid amount, in the smallest units of the cryptocurrency

### currency

> **currency**: `string`

Currency for the paid amount

### purchase\_date

> **purchase\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the item was purchased

### url

> **url**: `string`

Individual URL for the item on https://fragment.com

## Defined in

dist/generated/types.d.ts:22063
