[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addPaidMessageReaction$DirectInput

# Type Alias: addPaidMessageReaction$DirectInput

> **addPaidMessageReaction$DirectInput**: `object`

Adds the paid message reaction to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message belongs

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

Pass true to make paid reaction of the user on the message anonymous; pass false to make the user's profile visible among top reactors

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

Number of Telegram Stars to be used for the reaction; 1-getOption("paid_reaction_star_count_max")

## Defined in

dist/generated/types.d.ts:83453
