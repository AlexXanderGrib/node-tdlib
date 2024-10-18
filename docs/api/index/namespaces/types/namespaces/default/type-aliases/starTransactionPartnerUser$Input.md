[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starTransactionPartnerUser$Input

# Type Alias: starTransactionPartnerUser$Input

> **starTransactionPartnerUser$Input**: `object`

Version of [starTransactionPartnerUser](starTransactionPartnerUser.md) for method parameters.

The transaction is a gift of Telegram Stars from another user

## Type declaration

### \_

> `readonly` **\_**: `"starTransactionPartnerUser"`

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input.md) \| `null`

A sticker to be shown in the transaction information; may be null if unknown

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Identifier of the user; 0 if the gift was anonymous

## Defined in

dist/generated/types.d.ts:8961
