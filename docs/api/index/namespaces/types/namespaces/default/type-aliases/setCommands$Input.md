[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setCommands$Input

# Type Alias: setCommands$Input

> **setCommands$Input**: `object`

Sets the list of commands supported by the bot for the given user scope and language; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setCommands"`

### commands?

> `readonly` `optional` **commands**: [`vector$Input`](vector$Input.md)\<[`botCommand$Input`](botCommand$Input.md)\>

List of the bot's commands

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code. If empty, the commands will be applied to all users from the given scope, for which language there are no dedicated commands

### scope?

> `readonly` `optional` **scope**: [`BotCommandScope$Input`](BotCommandScope$Input.md) \| `null`

The scope to which the commands are relevant; pass null to change commands in the default bot command scope

## Defined in

dist/generated/types.d.ts:97410
