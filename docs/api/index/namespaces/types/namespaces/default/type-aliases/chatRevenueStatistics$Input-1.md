[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatRevenueStatistics$Input

# Type Alias: chatRevenueStatistics$Input

> **chatRevenueStatistics$Input**: `object`

Version of [chatRevenueStatistics](chatRevenueStatistics-1.md) for method parameters.

A detailed statistics about revenue earned from sponsored messages in a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatRevenueStatistics"`

### revenue\_amount?

> `readonly` `optional` **revenue\_amount**: [`chatRevenueAmount$Input`](chatRevenueAmount$Input-1.md)

Amount of earned revenue

### revenue\_by\_hour\_graph?

> `readonly` `optional` **revenue\_by\_hour\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing amount of revenue in a given hour

### revenue\_graph?

> `readonly` `optional` **revenue\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing amount of revenue

### usd\_rate?

> `readonly` `optional` **usd\_rate**: [`double`](double-1.md)

Current conversion rate of the cryptocurrency in which revenue is calculated to USD

## Defined in

dist/generated/types.d.ts:51885
