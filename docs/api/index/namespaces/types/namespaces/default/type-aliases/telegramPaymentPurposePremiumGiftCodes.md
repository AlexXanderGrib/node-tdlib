[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / telegramPaymentPurposePremiumGiftCodes

# Type Alias: telegramPaymentPurposePremiumGiftCodes

> **telegramPaymentPurposePremiumGiftCodes**: `object`

The user creating Telegram Premium gift codes for other users

## Type declaration

### \_

> **\_**: `"telegramPaymentPurposePremiumGiftCodes"`

### amount

> **amount**: [`int53`](int53-1.md)

Paid amount, in the smallest units of the currency

### boosted\_chat\_id

> **boosted\_chat\_id**: [`int53`](int53-1.md)

Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user; 0 if none

### currency

> **currency**: `string`

ISO 4217 currency code of the payment currency

### month\_count

> **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active for the users

### user\_ids

> **user\_ids**: [`vector`](vector.md)\<[`int53`](int53-1.md)\>

Identifiers of the users which can activate the gift codes

## Defined in

dist/generated/types.d.ts:42701
