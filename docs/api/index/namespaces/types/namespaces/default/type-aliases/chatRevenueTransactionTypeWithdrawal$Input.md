[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatRevenueTransactionTypeWithdrawal$Input

# Type Alias: chatRevenueTransactionTypeWithdrawal$Input

> **chatRevenueTransactionTypeWithdrawal$Input**: `object`

Version of [chatRevenueTransactionTypeWithdrawal](chatRevenueTransactionTypeWithdrawal.md) for method parameters.

Describes a withdrawal of earnings

## Type declaration

### \_

> `readonly` **\_**: `"chatRevenueTransactionTypeWithdrawal"`

### provider?

> `readonly` `optional` **provider**: `string`

Name of the payment provider

### state?

> `readonly` `optional` **state**: [`RevenueWithdrawalState$Input`](RevenueWithdrawalState$Input.md)

State of the withdrawal

### withdrawal\_date?

> `readonly` `optional` **withdrawal\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the earnings withdrawal started

## Defined in

dist/generated/types.d.ts:52098
