[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiftCodePaymentOption$Input

# Type Alias: premiumGiftCodePaymentOption$Input

> **premiumGiftCodePaymentOption$Input**: `object`

Version of [premiumGiftCodePaymentOption](premiumGiftCodePaymentOption-1.md) for method parameters.

Describes an option for creating Telegram Premium gift codes. Use telegramPaymentPurposePremiumGiftCodes for out-of-store payments

## Type declaration

### \_

> `readonly` **\_**: `"premiumGiftCodePaymentOption"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53-1.md)

The amount to pay, in the smallest units of the currency

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code for Telegram Premium gift code payment

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active

### store\_product\_id?

> `readonly` `optional` **store\_product\_id**: `string`

Identifier of the store product associated with the option; may be empty if none

### store\_product\_quantity?

> `readonly` `optional` **store\_product\_quantity**: [`int32`](int32-1.md)

Number of times the store product must be paid

### user\_count?

> `readonly` `optional` **user\_count**: [`int32`](int32-1.md)

Number of users which will be able to activate the gift codes

## Defined in

dist/generated/types.d.ts:8113
