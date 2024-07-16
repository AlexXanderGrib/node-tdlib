[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransaction

# Type Alias: starTransaction

> **starTransaction**: `object`

Represents a transaction changing the amount of owned Telegram stars

## Type declaration

### \_

> **\_**: `"starTransaction"`

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the transaction was completed

### id

> **id**: `string`

Unique identifier of the transaction

### is\_refund

> **is\_refund**: [`Bool`](Bool.md)

True, if the transaction is a refund of a previous transaction

### partner

> **partner**: [`StarTransactionPartner`](StarTransactionPartner.md)

Source of the incoming transaction, or its recipient for outgoing transactions

### star\_count

> **star\_count**: [`int53`](int53-1.md)

The amount of added owned Telegram stars; negative for outgoing transactions

## Defined in

dist/generated/types.d.ts:8555
