[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStarRevenueStatus$Input

# Type Alias: updateStarRevenueStatus$Input

> **updateStarRevenueStatus$Input**: `object`

Version of [updateStarRevenueStatus](updateStarRevenueStatus.md) for method parameters.

The Telegram Star revenue earned by a bot or a chat has changed. If Telegram Star transaction screen of the chat is opened, then getStarTransactions may be called to fetch new transactions

## Type declaration

### \_

> `readonly` **\_**: `"updateStarRevenueStatus"`

### owner\_id?

> `readonly` `optional` **owner\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the owner of the Telegram Stars

### status?

> `readonly` `optional` **status**: [`starRevenueStatus$Input`](starRevenueStatus$Input.md)

New Telegram Star revenue status

## Defined in

dist/generated/types.d.ts:58459
