[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setGameScore$Input

# Type Alias: setGameScore$Input

> **setGameScore$Input**: `object`

Updates the game score of the specified user in the game; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setGameScore"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat to which the message with the game belongs

### edit\_message?

> `readonly` `optional` **edit\_message**: [`Bool$Input`](Bool$Input.md)

Pass true to edit the game message to include the current scoreboard

### force?

> `readonly` `optional` **force**: [`Bool$Input`](Bool$Input.md)

Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### score?

> `readonly` `optional` **score**: [`int32`](int32-1.md)

The new score

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

## Defined in

dist/generated/types.d.ts:83289
