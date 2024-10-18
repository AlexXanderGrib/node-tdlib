[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiveawayCompleted

# Type Alias: messagePremiumGiveawayCompleted

> **messagePremiumGiveawayCompleted**: `object`

A Telegram Premium giveaway without public winners has been completed for the chat

## Type declaration

### \_

> **\_**: `"messagePremiumGiveawayCompleted"`

### giveaway\_message\_id

> **giveaway\_message\_id**: [`int53`](int53.md)

Identifier of the message with the giveaway; can be 0 if the message was deleted

### unclaimed\_prize\_count

> **unclaimed\_prize\_count**: [`int32`](int32.md)

Number of undistributed prizes

### winner\_count

> **winner\_count**: [`int32`](int32.md)

Number of winners in the giveaway

## Defined in

dist/generated/types.d.ts:28799
