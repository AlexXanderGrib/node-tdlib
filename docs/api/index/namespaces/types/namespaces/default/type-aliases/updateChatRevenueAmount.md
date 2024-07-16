[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatRevenueAmount

# Type Alias: updateChatRevenueAmount

> **updateChatRevenueAmount**: `object`

The revenue earned from sponsored messages in a chat has changed. If chat revenue screen is opened, then getChatRevenueTransactions may be called to fetch new transactions

## Type declaration

### \_

> **\_**: `"updateChatRevenueAmount"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### revenue\_amount

> **revenue\_amount**: [`chatRevenueAmount`](chatRevenueAmount-1.md)

New amount of earned revenue

## Defined in

dist/generated/types.d.ts:56767
