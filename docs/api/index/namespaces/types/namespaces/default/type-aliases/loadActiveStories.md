[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadActiveStories

# Type Alias: loadActiveStories()

> **loadActiveStories**: (`parameters`) => [`Ok`](Ok-1.md)

Loads more active stories from a story list. The loaded stories will be sent through updates. Active stories are sorted by

- the pair (active_stories.order, active_stories.story_sender_chat_id) in descending order. Returns a 404 error if all active stories have been loaded

## Parameters

• **parameters**: [`loadActiveStories$Input`](loadActiveStories$Input.md)

[loadActiveStories$Input](loadActiveStories$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:89939
