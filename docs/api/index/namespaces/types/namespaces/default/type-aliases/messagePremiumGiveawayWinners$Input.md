[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiveawayWinners$Input

# Type Alias: messagePremiumGiveawayWinners$Input

> **messagePremiumGiveawayWinners$Input**: `object`

Version of [messagePremiumGiveawayWinners](messagePremiumGiveawayWinners.md) for method parameters.

A Telegram Premium giveaway with public winners has been completed for the chat

## Type declaration

### \_

> `readonly` **\_**: `"messagePremiumGiveawayWinners"`

### actual\_winners\_selection\_date?

> `readonly` `optional` **actual\_winners\_selection\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in parameters of the giveaway

### additional\_chat\_count?

> `readonly` `optional` **additional\_chat\_count**: [`int32`](int32-1.md)

Number of other chats that participated in the giveaway

### boosted\_chat\_id?

> `readonly` `optional` **boosted\_chat\_id**: [`int53`](int53-1.md)

Identifier of the channel chat, which was automatically boosted by the winners of the giveaway for duration of the Premium subscription

### giveaway\_message\_id?

> `readonly` `optional` **giveaway\_message\_id**: [`int53`](int53-1.md)

Identifier of the message with the giveaway in the boosted chat

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active after code activation

### only\_new\_members?

> `readonly` `optional` **only\_new\_members**: [`Bool$Input`](Bool$Input.md)

True, if only new members of the chats were eligible for the giveaway

### prize\_description?

> `readonly` `optional` **prize\_description**: `string`

Additional description of the giveaway prize

### unclaimed\_prize\_count?

> `readonly` `optional` **unclaimed\_prize\_count**: [`int32`](int32-1.md)

Number of undistributed prizes

### was\_refunded?

> `readonly` `optional` **was\_refunded**: [`Bool$Input`](Bool$Input.md)

True, if the giveaway was canceled and was fully refunded

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32-1.md)

Total number of winners in the giveaway

### winner\_user\_ids?

> `readonly` `optional` **winner\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Up to 100 user identifiers of the winners of the giveaway

## Defined in

dist/generated/types.d.ts:28136
