[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / telegramPaymentPurposePremiumGiftCodes$Input

# Type Alias: telegramPaymentPurposePremiumGiftCodes$Input

> **telegramPaymentPurposePremiumGiftCodes$Input**: `object`

Version of [telegramPaymentPurposePremiumGiftCodes](telegramPaymentPurposePremiumGiftCodes.md) for method parameters.

The user creating Telegram Premium gift codes for other users

## Type declaration

### \_

> `readonly` **\_**: `"telegramPaymentPurposePremiumGiftCodes"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53.md)

Paid amount, in the smallest units of the currency

### boosted\_chat\_id?

> `readonly` `optional` **boosted\_chat\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user; 0 if none

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code of the payment currency

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active for the users

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the users which can activate the gift codes

## Defined in

dist/generated/types.d.ts:44182
