[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiveaway$Input

# Type Alias: messagePremiumGiveaway$Input

> **messagePremiumGiveaway$Input**: `object`

Version of [messagePremiumGiveaway](messagePremiumGiveaway.md) for method parameters.

A Telegram Premium giveaway

## Type declaration

### \_

> `readonly` **\_**: `"messagePremiumGiveaway"`

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active after code activation

### parameters?

> `readonly` `optional` **parameters**: [`premiumGiveawayParameters$Input`](premiumGiveawayParameters$Input.md)

Giveaway parameters

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input.md) \| `null`

A sticker to be shown in the message; may be null if unknown

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32.md)

Number of users which will receive Telegram Premium subscription gift codes

## Defined in

dist/generated/types.d.ts:28773
