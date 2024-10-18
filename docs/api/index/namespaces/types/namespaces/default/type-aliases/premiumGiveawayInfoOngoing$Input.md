[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiveawayInfoOngoing$Input

# Type Alias: premiumGiveawayInfoOngoing$Input

> **premiumGiveawayInfoOngoing$Input**: `object`

Version of [premiumGiveawayInfoOngoing](premiumGiveawayInfoOngoing.md) for method parameters.

Describes an ongoing giveaway

## Type declaration

### \_

> `readonly` **\_**: `"premiumGiveawayInfoOngoing"`

### creation\_date?

> `readonly` `optional` **creation\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the giveaway was created

### is\_ended?

> `readonly` `optional` **is\_ended**: [`Bool$Input`](Bool$Input.md)

True, if the giveaway has ended and results are being prepared

### status?

> `readonly` `optional` **status**: [`PremiumGiveawayParticipantStatus$Input`](PremiumGiveawayParticipantStatus$Input.md)

Status of the current user in the giveaway

## Defined in

dist/generated/types.d.ts:9222
