[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setInlineGameScore$Input

# Type Alias: setInlineGameScore$Input

> **setInlineGameScore$Input**: `object`

Updates the game score of the specified user in a game; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setInlineGameScore"`

### edit\_message?

> `readonly` `optional` **edit\_message**: [`Bool$Input`](Bool$Input.md)

Pass true to edit the game message to include the current scoreboard

### force?

> `readonly` `optional` **force**: [`Bool$Input`](Bool$Input.md)

Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Inline message identifier

### score?

> `readonly` `optional` **score**: [`int32`](int32.md)

The new score

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

User identifier

## Defined in

dist/generated/types.d.ts:85666
