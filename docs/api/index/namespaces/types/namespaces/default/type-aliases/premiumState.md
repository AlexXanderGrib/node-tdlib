[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumState

# Type Alias: premiumState

> **premiumState**: `object`

Contains state of Telegram Premium subscription and promotion videos for Premium features

## Type declaration

### \_

> **\_**: `"premiumState"`

### animations

> **animations**: [`vector`](vector.md)\<[`premiumFeaturePromotionAnimation`](premiumFeaturePromotionAnimation.md)\>

The list of available promotion animations for Premium features

### business\_animations

> **business\_animations**: [`vector`](vector.md)\<[`businessFeaturePromotionAnimation`](businessFeaturePromotionAnimation.md)\>

The list of available promotion animations for Business features

### payment\_options

> **payment\_options**: [`vector`](vector.md)\<[`premiumStatePaymentOption`](premiumStatePaymentOption.md)\>

The list of available options for buying Telegram Premium

### state

> **state**: [`formattedText`](formattedText.md)

Text description of the state of the current Premium subscription; may be empty if the current user has no Telegram Premium subscription

## Defined in

dist/generated/types.d.ts:43821
