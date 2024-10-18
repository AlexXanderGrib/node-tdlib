[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storePaymentPurposePremiumGiftCodes

# Type Alias: storePaymentPurposePremiumGiftCodes

> **storePaymentPurposePremiumGiftCodes**: `object`

The user creating Telegram Premium gift codes for other users

## Type declaration

### \_

> **\_**: `"storePaymentPurposePremiumGiftCodes"`

### amount

> **amount**: [`int53`](int53.md)

Paid amount, in the smallest units of the currency

### boosted\_chat\_id

> **boosted\_chat\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user; 0 if none

### currency

> **currency**: `string`

ISO 4217 currency code of the payment currency

### user\_ids

> **user\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Identifiers of the users which can activate the gift codes

## Defined in

dist/generated/types.d.ts:43953
