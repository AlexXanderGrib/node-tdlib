[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiveawayParameters$Input

# Type Alias: premiumGiveawayParameters$Input

> **premiumGiveawayParameters$Input**: `object`

Version of [premiumGiveawayParameters](premiumGiveawayParameters.md) for method parameters.

Describes parameters of a Telegram Premium giveaway

## Type declaration

### \_

> `readonly` **\_**: `"premiumGiveawayParameters"`

### additional\_chat\_ids?

> `readonly` `optional` **additional\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of other supergroup or channel chats that must be subscribed by the users to be eligible for the giveaway. There can be up to getOption("giveaway_additional_chat_count_max") additional chats

### boosted\_chat\_id?

> `readonly` `optional` **boosted\_chat\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel chat, which will be automatically boosted by the winners of the giveaway for duration of the Premium subscription.

- If the chat is a channel, then can_post_messages right is required in the channel, otherwise, the user must be an administrator in the supergroup

### country\_codes?

> `readonly` `optional` **country\_codes**: [`vector$Input`](vector$Input.md)\<`string`\>

The list of two-letter ISO 3166-1 alpha-2 codes of countries, users from which will be eligible for the giveaway. If empty, then all users can participate in the giveaway.

- There can be up to getOption("giveaway_country_count_max") chosen countries. Users with phone number that was bought at https://fragment.com can participate in any giveaway and the country code "FT" must not be specified in the list

### has\_public\_winners?

> `readonly` `optional` **has\_public\_winners**: [`Bool$Input`](Bool$Input.md)

True, if the list of winners of the giveaway will be available to everyone

### only\_new\_members?

> `readonly` `optional` **only\_new\_members**: [`Bool$Input`](Bool$Input.md)

True, if only new members of the chats will be eligible for the giveaway

### prize\_description?

> `readonly` `optional` **prize\_description**: `string`

Additional description of the giveaway prize; 0-128 characters

### winners\_selection\_date?

> `readonly` `optional` **winners\_selection\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the giveaway is expected to be performed; must be 60-getOption("giveaway_duration_max") seconds in the future in scheduled giveaways

## Defined in

dist/generated/types.d.ts:24466
