[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStarRevenueStatus$Input

# Type Alias: updateStarRevenueStatus$Input

> **updateStarRevenueStatus$Input**: `object`

Version of [updateStarRevenueStatus](updateStarRevenueStatus.md) for method parameters.

The Telegram star revenue earned by a bot or a chat has changed. If star transactions screen of the chat is opened, then getStarTransactions may be called to fetch new transactions

## Type declaration

### \_

> `readonly` **\_**: `"updateStarRevenueStatus"`

### owner\_id?

> `readonly` `optional` **owner\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the owner of the Telegram stars

### status?

> `readonly` `optional` **status**: [`starRevenueStatus$Input`](starRevenueStatus$Input-1.md)

New Telegram star revenue status

## Defined in

dist/generated/types.d.ts:56819
