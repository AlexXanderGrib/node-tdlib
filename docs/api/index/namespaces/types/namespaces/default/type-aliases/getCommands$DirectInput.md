[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getCommands$DirectInput

# Type Alias: getCommands$DirectInput

> **getCommands$DirectInput**: `object`

Returns the list of commands supported by the bot for the given user scope and language; for bots only

## Type declaration

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code or an empty string

### scope?

> `readonly` `optional` **scope**: [`BotCommandScope$Input`](BotCommandScope$Input.md) \| `null`

The scope to which the commands are relevant; pass null to get commands in the default bot command scope

## Defined in

dist/generated/types.d.ts:97512
