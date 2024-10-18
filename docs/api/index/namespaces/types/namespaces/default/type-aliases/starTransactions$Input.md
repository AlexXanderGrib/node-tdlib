[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransactions$Input

# Type Alias: starTransactions$Input

> **starTransactions$Input**: `object`

Version of [starTransactions](starTransactions.md) for method parameters.

Represents a list of Telegram Star transactions

## Type declaration

### \_

> `readonly` **\_**: `"starTransactions"`

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

The amount of owned Telegram Stars

### transactions?

> `readonly` `optional` **transactions**: [`vector$Input`](vector$Input.md)\<[`starTransaction$Input`](starTransaction$Input.md)\>

List of transactions with Telegram Stars

## Defined in

dist/generated/types.d.ts:9078
