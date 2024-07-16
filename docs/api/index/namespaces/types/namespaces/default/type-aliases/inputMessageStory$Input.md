[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageStory$Input

# Type Alias: inputMessageStory$Input

> **inputMessageStory$Input**: `object`

Version of [inputMessageStory](inputMessageStory.md) for method parameters.

A message with a forwarded story. Stories can't be sent to secret chats. A story can be forwarded only if story.can_be_forwarded

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageStory"`

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Story identifier

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53-1.md)

Identifier of the chat that posted the story

## Defined in

dist/generated/types.d.ts:30395
