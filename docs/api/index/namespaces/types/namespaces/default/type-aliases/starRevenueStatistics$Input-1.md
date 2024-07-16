[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starRevenueStatistics$Input

# Type Alias: starRevenueStatistics$Input

> **starRevenueStatistics$Input**: `object`

Version of [starRevenueStatistics](starRevenueStatistics-1.md) for method parameters.

A detailed statistics about Telegram stars earned by a bot or a chat

## Type declaration

### \_

> `readonly` **\_**: `"starRevenueStatistics"`

### revenue\_by\_day\_graph?

> `readonly` `optional` **revenue\_by\_day\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing amount of revenue in a given day

### status?

> `readonly` `optional` **status**: [`starRevenueStatus$Input`](starRevenueStatus$Input-1.md)

Telegram star revenue status

### usd\_rate?

> `readonly` `optional` **usd\_rate**: [`double`](double-1.md)

Current conversion rate of a Telegram star to USD

## Defined in

dist/generated/types.d.ts:52318
