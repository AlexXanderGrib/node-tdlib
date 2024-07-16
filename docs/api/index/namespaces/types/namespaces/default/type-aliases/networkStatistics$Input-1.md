[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / networkStatistics$Input

# Type Alias: networkStatistics$Input

> **networkStatistics$Input**: `object`

Version of [networkStatistics](networkStatistics-1.md) for method parameters.

A full list of available network statistic entries

## Type declaration

### \_

> `readonly` **\_**: `"networkStatistics"`

### entries?

> `readonly` `optional` **entries**: [`vector$Input`](vector$Input.md)\<[`NetworkStatisticsEntry$Input`](NetworkStatisticsEntry$Input.md)\>

Network statistics entries

### since\_date?

> `readonly` `optional` **since\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) from which the statistics are collected

## Defined in

dist/generated/types.d.ts:49625
