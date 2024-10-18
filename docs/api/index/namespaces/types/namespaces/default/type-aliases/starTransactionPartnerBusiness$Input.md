[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransactionPartnerBusiness$Input

# Type Alias: starTransactionPartnerBusiness$Input

> **starTransactionPartnerBusiness$Input**: `object`

Version of [starTransactionPartnerBusiness](starTransactionPartnerBusiness.md) for method parameters.

The transaction is a transaction with a business account

## Type declaration

### \_

> `readonly` **\_**: `"starTransactionPartnerBusiness"`

### media?

> `readonly` `optional` **media**: [`vector$Input`](vector$Input.md)\<[`PaidMedia$Input`](PaidMedia$Input.md)\>

The bought media if the trancastion wasn't refunded

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Identifier of the business account user

## Defined in

dist/generated/types.d.ts:8893
