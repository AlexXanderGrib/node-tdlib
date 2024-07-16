[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setBotInfoDescription$DirectInput

# Type Alias: setBotInfoDescription$DirectInput

> **setBotInfoDescription$DirectInput**: `object`

Sets the text shown in the chat with a bot if the chat is empty. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### description?

> `readonly` `optional` **description**: `string`

Sets the text shown in the chat with a bot if the chat is empty. Can be called only if userTypeBot.can_be_edited == true

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code. If empty, the description will be shown to all users for whose languages there is no dedicated description

## Defined in

dist/generated/types.d.ts:95494
