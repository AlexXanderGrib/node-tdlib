[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / telegramPaymentPurposePremiumGiveaway$Input

# Type Alias: telegramPaymentPurposePremiumGiveaway$Input

> **telegramPaymentPurposePremiumGiveaway$Input**: `object`

Version of [telegramPaymentPurposePremiumGiveaway](telegramPaymentPurposePremiumGiveaway.md) for method parameters.

The user creating a Telegram Premium giveaway

## Type declaration

### \_

> `readonly` **\_**: `"telegramPaymentPurposePremiumGiveaway"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53.md)

Paid amount, in the smallest units of the currency

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code of the payment currency

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active for the users

### parameters?

> `readonly` `optional` **parameters**: [`premiumGiveawayParameters$Input`](premiumGiveawayParameters$Input.md)

Giveaway parameters

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32.md)

Number of users which will be able to activate the gift codes

## Defined in

dist/generated/types.d.ts:44246
