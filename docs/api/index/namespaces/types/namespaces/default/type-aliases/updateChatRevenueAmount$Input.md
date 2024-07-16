[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatRevenueAmount$Input

# Type Alias: updateChatRevenueAmount$Input

> **updateChatRevenueAmount$Input**: `object`

Version of [updateChatRevenueAmount](updateChatRevenueAmount.md) for method parameters.

The revenue earned from sponsored messages in a chat has changed. If chat revenue screen is opened, then getChatRevenueTransactions may be called to fetch new transactions

## Type declaration

### \_

> `readonly` **\_**: `"updateChatRevenueAmount"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### revenue\_amount?

> `readonly` `optional` **revenue\_amount**: [`chatRevenueAmount$Input`](chatRevenueAmount$Input-1.md)

New amount of earned revenue

## Defined in

dist/generated/types.d.ts:56785
