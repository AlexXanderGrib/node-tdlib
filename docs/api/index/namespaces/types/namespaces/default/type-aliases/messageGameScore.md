[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGameScore

# Type Alias: messageGameScore

> **messageGameScore**: `object`

A new high score was achieved in a game

## Type declaration

### \_

> **\_**: `"messageGameScore"`

### game\_id

> **game\_id**: [`int64`](int64.md)

Identifier of the game; may be different from the games presented in the message with the game

### game\_message\_id

> **game\_message\_id**: [`int53`](int53.md)

Identifier of the message with the game, can be an identifier of a deleted message

### score

> **score**: [`int32`](int32.md)

New score

## Defined in

dist/generated/types.d.ts:28217
