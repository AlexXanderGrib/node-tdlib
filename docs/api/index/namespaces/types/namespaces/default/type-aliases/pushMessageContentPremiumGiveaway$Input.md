[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentPremiumGiveaway$Input

# Type Alias: pushMessageContentPremiumGiveaway$Input

> **pushMessageContentPremiumGiveaway$Input**: `object`

Version of [pushMessageContentPremiumGiveaway](pushMessageContentPremiumGiveaway.md) for method parameters.

A message with a Telegram Premium giveaway

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentPremiumGiveaway"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active after code activation; 0 for pinned message

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32-1.md)

Number of users which will receive Telegram Premium subscription gift codes; 0 for pinned message

## Defined in

dist/generated/types.d.ts:44630
