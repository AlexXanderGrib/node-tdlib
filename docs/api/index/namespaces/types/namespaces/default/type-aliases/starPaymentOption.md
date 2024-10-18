[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starPaymentOption

# Type Alias: starPaymentOption

> **starPaymentOption**: `object`

Describes an option for buying Telegram Stars. Use telegramPaymentPurposeStars for out-of-store payments

## Type declaration

### \_

> **\_**: `"starPaymentOption"`

### amount

> **amount**: [`int53`](int53.md)

The amount to pay, in the smallest units of the currency

### currency

> **currency**: `string`

ISO 4217 currency code for the payment

### is\_additional

> **is\_additional**: [`Bool`](Bool.md)

True, if the option must be shown only in the full list of payment options

### star\_count

> **star\_count**: [`int53`](int53.md)

Number of Telegram Stars that will be purchased

### store\_product\_id

> **store\_product\_id**: `string`

Identifier of the store product associated with the option; may be empty if none

## Defined in

dist/generated/types.d.ts:8505
