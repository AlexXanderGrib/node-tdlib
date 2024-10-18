[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumFeatures$Input

# Type Alias: premiumFeatures$Input

> **premiumFeatures$Input**: `object`

Version of [premiumFeatures](premiumFeatures.md) for method parameters.

Contains information about features, available to Premium users

## Type declaration

### \_

> `readonly` **\_**: `"premiumFeatures"`

### features?

> `readonly` `optional` **features**: [`vector$Input`](vector$Input.md)\<[`PremiumFeature$Input`](PremiumFeature$Input.md)\>

The list of available features

### limits?

> `readonly` `optional` **limits**: [`vector$Input`](vector$Input.md)\<[`premiumLimit$Input`](premiumLimit$Input.md)\>

The list of limits, increased for Premium users

### payment\_link?

> `readonly` `optional` **payment\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

An internal link to be opened to pay for Telegram Premium if store payment isn't possible; may be null if direct payment isn't available

## Defined in

dist/generated/types.d.ts:43574
