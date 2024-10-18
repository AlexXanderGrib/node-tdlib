[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / game$Input

# Type Alias: game$Input

> **game$Input**: `object`

Version of [game](game.md) for method parameters.

Describes a game. Use getInternalLink with internalLinkTypeGame to share the game

## Type declaration

### \_

> `readonly` **\_**: `"game"`

### animation?

> `readonly` `optional` **animation**: [`animation$Input`](animation$Input.md) \| `null`

Game animation; may be null

### description?

> `readonly` `optional` **description**: `string`

Describes a game. Use getInternalLink with internalLinkTypeGame to share the game

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique game identifier

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input.md)

Game photo

### short\_name?

> `readonly` `optional` **short\_name**: `string`

Game short name

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input.md)

Game text, usually containing scoreboards for a game

### title?

> `readonly` `optional` **title**: `string`

Game title

## Defined in

dist/generated/types.d.ts:5710
