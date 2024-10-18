[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageStory$Input

# Type Alias: messageStory$Input

> **messageStory$Input**: `object`

Version of [messageStory](messageStory.md) for method parameters.

A message with a forwarded story

## Type declaration

### \_

> `readonly` **\_**: `"messageStory"`

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

Story identifier

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the story

### via\_mention?

> `readonly` `optional` **via\_mention**: [`Bool$Input`](Bool$Input.md)

True, if the story was automatically forwarded because of a mention of the user

## Defined in

dist/generated/types.d.ts:27340
