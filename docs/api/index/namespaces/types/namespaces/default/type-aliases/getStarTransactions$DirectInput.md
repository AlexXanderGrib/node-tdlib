[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStarTransactions$DirectInput

# Type Alias: getStarTransactions$DirectInput

> **getStarTransactions$DirectInput**: `object`

Returns the list of Telegram star transactions for the specified owner

## Type declaration

### direction?

> `readonly` `optional` **direction**: [`StarTransactionDirection$Input`](StarTransactionDirection$Input.md) \| `null`

Direction of the transactions to receive; pass null to get all transactions

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of transactions to return

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first transaction to return as received from the previous request; use empty string to get the first chunk of results

### owner\_id?

> `readonly` `optional` **owner\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the owner of the Telegram stars; can be the identifier of the current user, identifier of an owned bot,

- or identifier of a channel chat with supergroupFullInfo.can_get_star_revenue_statistics == true

## Defined in

dist/generated/types.d.ts:100772
