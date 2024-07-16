[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransactionPartnerChannel$Input

# Type Alias: starTransactionPartnerChannel$Input

> **starTransactionPartnerChannel$Input**: `object`

Version of [starTransactionPartnerChannel](starTransactionPartnerChannel.md) for method parameters.

The transaction is a transaction with a channel chat

## Type declaration

### \_

> `readonly` **\_**: `"starTransactionPartnerChannel"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### media?

> `readonly` `optional` **media**: [`vector$Input`](vector$Input.md)\<[`PaidMedia$Input`](PaidMedia$Input.md)\>

Information about the bought media

### paid\_media\_message\_id?

> `readonly` `optional` **paid\_media\_message\_id**: [`int53`](int53-1.md)

Identifier of the corresponding message with paid media; can be an identifier of a deleted message

## Defined in

dist/generated/types.d.ts:8520
