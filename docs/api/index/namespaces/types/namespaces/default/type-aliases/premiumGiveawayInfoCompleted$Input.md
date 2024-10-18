[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiveawayInfoCompleted$Input

# Type Alias: premiumGiveawayInfoCompleted$Input

> **premiumGiveawayInfoCompleted$Input**: `object`

Version of [premiumGiveawayInfoCompleted](premiumGiveawayInfoCompleted.md) for method parameters.

Describes a completed giveaway

## Type declaration

### \_

> `readonly` **\_**: `"premiumGiveawayInfoCompleted"`

### activation\_count?

> `readonly` `optional` **activation\_count**: [`int32`](int32.md)

Number of winners, which activated their gift codes

### actual\_winners\_selection\_date?

> `readonly` `optional` **actual\_winners\_selection\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in parameters of the giveaway

### creation\_date?

> `readonly` `optional` **creation\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the giveaway was created

### gift\_code?

> `readonly` `optional` **gift\_code**: `string`

Telegram Premium gift code that was received by the current user; empty if the user isn't a winner in the giveaway

### was\_refunded?

> `readonly` `optional` **was\_refunded**: [`Bool$Input`](Bool$Input.md)

True, if the giveaway was canceled and was fully refunded

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32.md)

Number of winners in the giveaway

## Defined in

dist/generated/types.d.ts:9281
