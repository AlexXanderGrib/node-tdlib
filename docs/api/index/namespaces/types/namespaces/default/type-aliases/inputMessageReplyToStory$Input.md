[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageReplyToStory$Input

# Type Alias: inputMessageReplyToStory$Input

> **inputMessageReplyToStory$Input**: `object`

Version of [inputMessageReplyToStory](inputMessageReplyToStory.md) for method parameters.

Describes a story to be replied

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageReplyToStory"`

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

The identifier of the story

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

The identifier of the sender of the story. Currently, stories can be replied only in the sender's chat and channel stories can't be replied

## Defined in

dist/generated/types.d.ts:14053
