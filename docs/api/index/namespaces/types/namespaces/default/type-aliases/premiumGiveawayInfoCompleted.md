[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiveawayInfoCompleted

# Type Alias: premiumGiveawayInfoCompleted

> **premiumGiveawayInfoCompleted**: `object`

Describes a completed giveaway

## Type declaration

### \_

> **\_**: `"premiumGiveawayInfoCompleted"`

### activation\_count

> **activation\_count**: [`int32`](int32.md)

Number of winners, which activated their gift codes

### actual\_winners\_selection\_date

> **actual\_winners\_selection\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in parameters of the giveaway

### creation\_date

> **creation\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the giveaway was created

### gift\_code

> **gift\_code**: `string`

Telegram Premium gift code that was received by the current user; empty if the user isn't a winner in the giveaway

### was\_refunded

> **was\_refunded**: [`Bool`](Bool.md)

True, if the giveaway was canceled and was fully refunded

### winner\_count

> **winner\_count**: [`int32`](int32.md)

Number of winners in the giveaway

## Defined in

dist/generated/types.d.ts:9243
