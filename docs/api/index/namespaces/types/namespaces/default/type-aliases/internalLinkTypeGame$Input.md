[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeGame$Input

# Type Alias: internalLinkTypeGame$Input

> **internalLinkTypeGame$Input**: `object`

Version of [internalLinkTypeGame](internalLinkTypeGame.md) for method parameters.

The link is a link to a game. Call searchPublicChat with the given bot username, check that the user is a bot,

- ask the current user to select a chat to send the game, and then call sendMessage with inputMessageGame

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeGame"`

### bot\_username?

> `readonly` `optional` **bot\_username**: `string`

Username of the bot that owns the game

### game\_short\_name?

> `readonly` `optional` **game\_short\_name**: `string`

Short name of the game

## Defined in

dist/generated/types.d.ts:47815
