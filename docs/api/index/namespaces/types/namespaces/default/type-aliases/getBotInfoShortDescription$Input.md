[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getBotInfoShortDescription$Input

# Type Alias: getBotInfoShortDescription$Input

> **getBotInfoShortDescription$Input**: `object`

Returns the text shown on a bot's profile page and sent together with the link when users share the bot in the given language. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### \_

> `readonly` **\_**: `"getBotInfoShortDescription"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code or an empty string

## Defined in

dist/generated/types.d.ts:98376
