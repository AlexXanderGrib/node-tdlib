[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStarRevenueStatus

# Type Alias: updateStarRevenueStatus

> **updateStarRevenueStatus**: `object`

The Telegram Star revenue earned by a bot or a chat has changed. If Telegram Star transaction screen of the chat is opened, then getStarTransactions may be called to fetch new transactions

## Type declaration

### \_

> **\_**: `"updateStarRevenueStatus"`

### owner\_id

> **owner\_id**: [`MessageSender`](MessageSender.md)

Identifier of the owner of the Telegram Stars

### status

> **status**: [`starRevenueStatus`](starRevenueStatus.md)

New Telegram Star revenue status

## Defined in

dist/generated/types.d.ts:58441
