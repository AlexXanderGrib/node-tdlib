[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransaction$Input

# Type Alias: starTransaction$Input

> **starTransaction$Input**: `object`

Version of [starTransaction](starTransaction.md) for method parameters.

Represents a transaction changing the amount of owned Telegram Stars

## Type declaration

### \_

> `readonly` **\_**: `"starTransaction"`

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the transaction was completed

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the transaction

### is\_refund?

> `readonly` `optional` **is\_refund**: [`Bool$Input`](Bool$Input.md)

True, if the transaction is a refund of a previous transaction

### partner?

> `readonly` `optional` **partner**: [`StarTransactionPartner$Input`](StarTransactionPartner$Input.md)

Source of the incoming transaction, or its recipient for outgoing transactions

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

The amount of added owned Telegram Stars; negative for outgoing transactions

## Defined in

dist/generated/types.d.ts:9024
