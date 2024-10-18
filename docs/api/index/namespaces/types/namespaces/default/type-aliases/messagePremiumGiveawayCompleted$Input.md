[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiveawayCompleted$Input

# Type Alias: messagePremiumGiveawayCompleted$Input

> **messagePremiumGiveawayCompleted$Input**: `object`

Version of [messagePremiumGiveawayCompleted](messagePremiumGiveawayCompleted.md) for method parameters.

A Telegram Premium giveaway without public winners has been completed for the chat

## Type declaration

### \_

> `readonly` **\_**: `"messagePremiumGiveawayCompleted"`

### giveaway\_message\_id?

> `readonly` `optional` **giveaway\_message\_id**: [`int53`](int53.md)

Identifier of the message with the giveaway; can be 0 if the message was deleted

### unclaimed\_prize\_count?

> `readonly` `optional` **unclaimed\_prize\_count**: [`int32`](int32.md)

Number of undistributed prizes

### winner\_count?

> `readonly` `optional` **winner\_count**: [`int32`](int32.md)

Number of winners in the giveaway

## Defined in

dist/generated/types.d.ts:28822
