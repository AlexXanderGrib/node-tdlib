[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostSourceGiveaway

# Type Alias: chatBoostSourceGiveaway

> **chatBoostSourceGiveaway**: `object`

The chat created a Telegram Premium giveaway

## Type declaration

### \_

> **\_**: `"chatBoostSourceGiveaway"`

### gift\_code

> **gift\_code**: `string`

The created Telegram Premium gift code if it was used by the user or can be claimed by the current user; an empty string otherwise

### giveaway\_message\_id

> **giveaway\_message\_id**: [`int53`](int53.md)

Identifier of the corresponding giveaway message; can be an identifier of a deleted message

### is\_unclaimed

> **is\_unclaimed**: [`Bool`](Bool.md)

True, if the winner for the corresponding Telegram Premium subscription wasn't chosen, because there were not enough participants

### user\_id

> **user\_id**: [`int53`](int53.md)

Identifier of a user that won in the giveaway; 0 if none

## Defined in

dist/generated/types.d.ts:35389
