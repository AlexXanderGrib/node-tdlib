[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteraction

# Type Alias: storyInteraction

> **storyInteraction**: `object`

Represents interaction with a story

## Type declaration

### \_

> **\_**: `"storyInteraction"`

### actor\_id

> **actor\_id**: [`MessageSender`](MessageSender.md)

Identifier of the user or chat that made the interaction

### block\_list

> **block\_list**: [`BlockList`](BlockList.md) \| `null`

Block list to which the actor is added; may be null if none or for chat stories

### interaction\_date

> **interaction\_date**: [`int32`](int32.md)

Approximate point in time (Unix timestamp) when the interaction happened

### type

> **type**: [`StoryInteractionType`](StoryInteractionType.md)

Type of the interaction

## Defined in

dist/generated/types.d.ts:34623
