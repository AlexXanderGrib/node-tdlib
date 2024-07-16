[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadActiveStories$Input

# Type Alias: loadActiveStories$Input

> **loadActiveStories$Input**: `object`

Loads more active stories from a story list. The loaded stories will be sent through updates. Active stories are sorted by

- the pair (active_stories.order, active_stories.story_sender_chat_id) in descending order. Returns a 404 error if all active stories have been loaded

## Type declaration

### \_

> `readonly` **\_**: `"loadActiveStories"`

### story\_list?

> `readonly` `optional` **story\_list**: [`StoryList$Input`](StoryList$Input.md)

The story list in which to load active stories

## Defined in

dist/generated/types.d.ts:87536
