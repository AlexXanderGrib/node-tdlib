[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatRevenueAmount$Input

# Type Alias: chatRevenueAmount$Input

> **chatRevenueAmount$Input**: `object`

Version of [chatRevenueAmount](chatRevenueAmount.md) for method parameters.

Contains information about revenue earned from sponsored messages in a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatRevenueAmount"`

### available\_amount?

> `readonly` `optional` **available\_amount**: [`int64$Input`](int64$Input.md)

Amount of the cryptocurrency available for withdrawal, in the smallest units of the cryptocurrency

### balance\_amount?

> `readonly` `optional` **balance\_amount**: [`int64$Input`](int64$Input.md)

Amount of the cryptocurrency that isn't withdrawn yet, in the smallest units of the cryptocurrency

### cryptocurrency?

> `readonly` `optional` **cryptocurrency**: `string`

Cryptocurrency in which revenue is calculated

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int64$Input`](int64$Input.md)

Total amount of the cryptocurrency earned, in the smallest units of the cryptocurrency

## Defined in

dist/generated/types.d.ts:53447
