[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteraction$Input

# Type Alias: storyInteraction$Input

> **storyInteraction$Input**: `object`

Version of [storyInteraction](storyInteraction-1.md) for method parameters.

Represents interaction with a story

## Type declaration

### \_

> `readonly` **\_**: `"storyInteraction"`

### actor\_id?

> `readonly` `optional` **actor\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the user or chat that made the interaction

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md) \| `null`

Block list to which the actor is added; may be null if none or for chat stories

### interaction\_date?

> `readonly` `optional` **interaction\_date**: [`int32`](int32-1.md)

Approximate point in time (Unix timestamp) when the interaction happened

### type?

> `readonly` `optional` **type**: [`StoryInteractionType$Input`](StoryInteractionType$Input.md)

Type of the interaction

## Defined in

dist/generated/types.d.ts:33373
