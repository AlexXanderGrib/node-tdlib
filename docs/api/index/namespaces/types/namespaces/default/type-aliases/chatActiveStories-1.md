[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatActiveStories

# Type Alias: chatActiveStories

> **chatActiveStories**: `object`

Describes active stories posted by a chat

## Type declaration

### \_

> **\_**: `"chatActiveStories"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat that posted the stories

### list

> **list**: [`StoryList`](StoryList.md) \| `null`

Identifier of the story list in which the stories are shown; may be null if the stories aren't shown in a story list

### max\_read\_story\_id

> **max\_read\_story\_id**: [`int32`](int32-1.md)

Identifier of the last read active story

### order

> **order**: [`int53`](int53-1.md)

A parameter used to determine order of the stories in the story list; 0 if the stories doesn't need to be shown in the story list. Stories must be sorted by the pair (order, story_sender_chat_id) in descending order

### stories

> **stories**: [`vector`](vector.md)\<[`storyInfo`](storyInfo-1.md)\>

Basic information about the stories; use getStory to get full information about the stories. The stories are in a chronological order (i.e., in order of increasing story identifiers)

## Defined in

dist/generated/types.d.ts:33209
