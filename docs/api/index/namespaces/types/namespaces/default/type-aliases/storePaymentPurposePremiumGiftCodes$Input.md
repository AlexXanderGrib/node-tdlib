[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storePaymentPurposePremiumGiftCodes$Input

# Type Alias: storePaymentPurposePremiumGiftCodes$Input

> **storePaymentPurposePremiumGiftCodes$Input**: `object`

Version of [storePaymentPurposePremiumGiftCodes](storePaymentPurposePremiumGiftCodes.md) for method parameters.

The user creating Telegram Premium gift codes for other users

## Type declaration

### \_

> `readonly` **\_**: `"storePaymentPurposePremiumGiftCodes"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53.md)

Paid amount, in the smallest units of the currency

### boosted\_chat\_id?

> `readonly` `optional` **boosted\_chat\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user; 0 if none

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code of the payment currency

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the users which can activate the gift codes

## Defined in

dist/generated/types.d.ts:43981
