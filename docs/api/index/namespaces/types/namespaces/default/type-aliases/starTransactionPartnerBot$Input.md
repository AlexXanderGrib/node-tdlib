[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransactionPartnerBot$Input

# Type Alias: starTransactionPartnerBot$Input

> **starTransactionPartnerBot$Input**: `object`

Version of [starTransactionPartnerBot](starTransactionPartnerBot.md) for method parameters.

The transaction is a transaction with a bot

## Type declaration

### \_

> `readonly` **\_**: `"starTransactionPartnerBot"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the bot

### invoice\_payload?

> `readonly` `optional` **invoice\_payload**: [`bytes$Input`](bytes$Input-1.md)

Invoice payload; for bots only

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input-1.md) \| `null`

Information about the bought product; may be null if not applicable

## Defined in

dist/generated/types.d.ts:8476
