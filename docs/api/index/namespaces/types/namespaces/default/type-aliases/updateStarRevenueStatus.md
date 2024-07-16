[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStarRevenueStatus

# Type Alias: updateStarRevenueStatus

> **updateStarRevenueStatus**: `object`

The Telegram star revenue earned by a bot or a chat has changed. If star transactions screen of the chat is opened, then getStarTransactions may be called to fetch new transactions

## Type declaration

### \_

> **\_**: `"updateStarRevenueStatus"`

### owner\_id

> **owner\_id**: [`MessageSender`](MessageSender.md)

Identifier of the owner of the Telegram stars

### status

> **status**: [`starRevenueStatus`](starRevenueStatus-1.md)

New Telegram star revenue status

## Defined in

dist/generated/types.d.ts:56801
