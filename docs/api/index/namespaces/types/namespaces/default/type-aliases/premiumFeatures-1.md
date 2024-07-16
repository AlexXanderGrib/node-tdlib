[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumFeatures

# Type Alias: premiumFeatures

> **premiumFeatures**: `object`

Contains information about features, available to Premium users

## Type declaration

### \_

> **\_**: `"premiumFeatures"`

### features

> **features**: [`vector`](vector.md)\<[`PremiumFeature`](PremiumFeature.md)\>

The list of available features

### limits

> **limits**: [`vector`](vector.md)\<[`premiumLimit`](premiumLimit-1.md)\>

The list of limits, increased for Premium users

### payment\_link

> **payment\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

An internal link to be opened to pay for Telegram Premium if store payment isn't possible; may be null if direct payment isn't available

## Defined in

dist/generated/types.d.ts:42157
