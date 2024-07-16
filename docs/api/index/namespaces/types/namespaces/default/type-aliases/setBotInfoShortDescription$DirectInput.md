[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setBotInfoShortDescription$DirectInput

# Type Alias: setBotInfoShortDescription$DirectInput

> **setBotInfoShortDescription$DirectInput**: `object`

Sets the text shown on a bot's profile page and sent together with the link when users share the bot. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code. If empty, the short description will be shown to all users for whose languages there is no dedicated description

### short\_description?

> `readonly` `optional` **short\_description**: `string`

New bot's short description on the specified language

## Defined in

dist/generated/types.d.ts:95580
