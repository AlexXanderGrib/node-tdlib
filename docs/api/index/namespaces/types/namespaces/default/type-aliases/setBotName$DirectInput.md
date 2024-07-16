[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setBotName$DirectInput

# Type Alias: setBotName$DirectInput

> **setBotName$DirectInput**: `object`

Sets the name of a bot. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose languages there is no dedicated name

### name?

> `readonly` `optional` **name**: `string`

New bot's name on the specified language; 0-64 characters; must be non-empty if language code is empty

## Defined in

dist/generated/types.d.ts:95284
