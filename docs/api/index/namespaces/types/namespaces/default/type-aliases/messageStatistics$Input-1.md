[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageStatistics$Input

# Type Alias: messageStatistics$Input

> **messageStatistics$Input**: `object`

Version of [messageStatistics](messageStatistics-1.md) for method parameters.

A detailed statistics about a message

## Type declaration

### \_

> `readonly` **\_**: `"messageStatistics"`

### message\_interaction\_graph?

> `readonly` `optional` **message\_interaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of message views and shares

### message\_reaction\_graph?

> `readonly` `optional` **message\_reaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of message reactions

## Defined in

dist/generated/types.d.ts:51929
