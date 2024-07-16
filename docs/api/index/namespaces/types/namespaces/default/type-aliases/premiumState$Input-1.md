[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumState$Input

# Type Alias: premiumState$Input

> **premiumState$Input**: `object`

Version of [premiumState](premiumState-1.md) for method parameters.

Contains state of Telegram Premium subscription and promotion videos for Premium features

## Type declaration

### \_

> `readonly` **\_**: `"premiumState"`

### animations?

> `readonly` `optional` **animations**: [`vector$Input`](vector$Input.md)\<[`premiumFeaturePromotionAnimation$Input`](premiumFeaturePromotionAnimation$Input-1.md)\>

The list of available promotion animations for Premium features

### business\_animations?

> `readonly` `optional` **business\_animations**: [`vector$Input`](vector$Input.md)\<[`businessFeaturePromotionAnimation$Input`](businessFeaturePromotionAnimation$Input-1.md)\>

The list of available promotion animations for Business features

### payment\_options?

> `readonly` `optional` **payment\_options**: [`vector$Input`](vector$Input.md)\<[`premiumStatePaymentOption$Input`](premiumStatePaymentOption$Input-1.md)\>

The list of available options for buying Telegram Premium

### state?

> `readonly` `optional` **state**: [`formattedText$Input`](formattedText$Input-1.md)

Text description of the state of the current Premium subscription; may be empty if the current user has no Telegram Premium subscription

## Defined in

dist/generated/types.d.ts:42455
