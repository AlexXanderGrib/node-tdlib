[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentGameScore$Input

# Type Alias: pushMessageContentGameScore$Input

> **pushMessageContentGameScore$Input**: `object`

Version of [pushMessageContentGameScore](pushMessageContentGameScore.md) for method parameters.

A new high score was achieved in a game

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentGameScore"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### score?

> `readonly` `optional` **score**: [`int32`](int32.md)

New score, 0 for pinned message

### title?

> `readonly` `optional` **title**: `string`

Game title, empty for pinned message

## Defined in

dist/generated/types.d.ts:45888
