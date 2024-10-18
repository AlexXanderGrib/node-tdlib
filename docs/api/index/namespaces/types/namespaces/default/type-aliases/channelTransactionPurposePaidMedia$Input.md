[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / channelTransactionPurposePaidMedia$Input

# Type Alias: channelTransactionPurposePaidMedia$Input

> **channelTransactionPurposePaidMedia$Input**: `object`

Version of [channelTransactionPurposePaidMedia](channelTransactionPurposePaidMedia.md) for method parameters.

Paid media were bought

## Type declaration

### \_

> `readonly` **\_**: `"channelTransactionPurposePaidMedia"`

### media?

> `readonly` `optional` **media**: [`vector$Input`](vector$Input.md)\<[`PaidMedia$Input`](PaidMedia$Input.md)\>

The bought media if the trancastion wasn't refunded

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the corresponding message with paid media; can be an identifier of a deleted message

## Defined in

dist/generated/types.d.ts:8697
