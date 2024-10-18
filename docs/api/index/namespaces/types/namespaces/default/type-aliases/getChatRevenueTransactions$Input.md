[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatRevenueTransactions$Input

# Type Alias: getChatRevenueTransactions$Input

> **getChatRevenueTransactions$Input**: `object`

Returns the list of revenue transactions for a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true

## Type declaration

### \_

> `readonly` **\_**: `"getChatRevenueTransactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of transactions to be returned; up to 200

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Number of transactions to skip

## Defined in

dist/generated/types.d.ts:101170
