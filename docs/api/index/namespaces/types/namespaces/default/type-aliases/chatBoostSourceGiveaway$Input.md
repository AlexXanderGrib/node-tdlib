[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostSourceGiveaway$Input

# Type Alias: chatBoostSourceGiveaway$Input

> **chatBoostSourceGiveaway$Input**: `object`

Version of [chatBoostSourceGiveaway](chatBoostSourceGiveaway.md) for method parameters.

The chat created a Telegram Premium giveaway

## Type declaration

### \_

> `readonly` **\_**: `"chatBoostSourceGiveaway"`

### gift\_code?

> `readonly` `optional` **gift\_code**: `string`

The created Telegram Premium gift code if it was used by the user or can be claimed by the current user; an empty string otherwise

### giveaway\_message\_id?

> `readonly` `optional` **giveaway\_message\_id**: [`int53`](int53-1.md)

Identifier of the corresponding giveaway message; can be an identifier of a deleted message

### is\_unclaimed?

> `readonly` `optional` **is\_unclaimed**: [`Bool$Input`](Bool$Input.md)

True, if the winner for the corresponding Telegram Premium subscription wasn't chosen, because there were not enough participants

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of a user that won in the giveaway; 0 if none

## Defined in

dist/generated/types.d.ts:34047
