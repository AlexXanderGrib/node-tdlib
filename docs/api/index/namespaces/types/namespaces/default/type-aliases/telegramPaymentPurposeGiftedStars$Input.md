[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / telegramPaymentPurposeGiftedStars$Input

# Type Alias: telegramPaymentPurposeGiftedStars$Input

> **telegramPaymentPurposeGiftedStars$Input**: `object`

Version of [telegramPaymentPurposeGiftedStars](telegramPaymentPurposeGiftedStars.md) for method parameters.

The user buying Telegram Stars for other users

## Type declaration

### \_

> `readonly` **\_**: `"telegramPaymentPurposeGiftedStars"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53.md)

Paid amount, in the smallest units of the currency

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code of the payment currency

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

Number of bought Telegram Stars

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Identifier of the user to which Telegram Stars are gifted

## Defined in

dist/generated/types.d.ts:44349
