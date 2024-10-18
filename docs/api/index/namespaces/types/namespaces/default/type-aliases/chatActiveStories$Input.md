[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatActiveStories$Input

# Type Alias: chatActiveStories$Input

> **chatActiveStories$Input**: `object`

Version of [chatActiveStories](chatActiveStories.md) for method parameters.

Describes active stories posted by a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatActiveStories"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the stories

### list?

> `readonly` `optional` **list**: [`StoryList$Input`](StoryList$Input.md) \| `null`

Identifier of the story list in which the stories are shown; may be null if the stories aren't shown in a story list

### max\_read\_story\_id?

> `readonly` `optional` **max\_read\_story\_id**: [`int32`](int32.md)

Identifier of the last read active story

### order?

> `readonly` `optional` **order**: [`int53`](int53.md)

A parameter used to determine order of the stories in the story list; 0 if the stories doesn't need to be shown in the story list. Stories must be sorted by the pair (order, story_sender_chat_id) in descending order

### stories?

> `readonly` `optional` **stories**: [`vector$Input`](vector$Input.md)\<[`storyInfo$Input`](storyInfo$Input.md)\>

Basic information about the stories; use getStory to get full information about the stories. The stories are in chronological order (i.e., in order of increasing story identifiers)

## Defined in

dist/generated/types.d.ts:34520
