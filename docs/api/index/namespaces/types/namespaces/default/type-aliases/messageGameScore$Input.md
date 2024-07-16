[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGameScore$Input

# Type Alias: messageGameScore$Input

> **messageGameScore$Input**: `object`

Version of [messageGameScore](messageGameScore.md) for method parameters.

A new high score was achieved in a game

## Type declaration

### \_

> `readonly` **\_**: `"messageGameScore"`

### game\_id?

> `readonly` `optional` **game\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the game; may be different from the games presented in the message with the game

### game\_message\_id?

> `readonly` `optional` **game\_message\_id**: [`int53`](int53-1.md)

Identifier of the message with the game, can be an identifier of a deleted message

### score?

> `readonly` `optional` **score**: [`int32`](int32-1.md)

New score

## Defined in

dist/generated/types.d.ts:27480
