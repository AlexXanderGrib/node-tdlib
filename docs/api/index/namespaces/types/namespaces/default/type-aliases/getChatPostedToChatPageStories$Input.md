[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatPostedToChatPageStories$Input

# Type Alias: getChatPostedToChatPageStories$Input

> **getChatPostedToChatPageStories$Input**: `object`

Returns the list of stories that posted by the given chat to its chat page. If from_story_id == 0, then pinned stories are returned first.

- Then, stories are returned in a reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

## Type declaration

### \_

> `readonly` **\_**: `"getChatPostedToChatPageStories"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### from\_story\_id?

> `readonly` `optional` **from\_story\_id**: [`int32`](int32-1.md)

Identifier of the story starting from which stories must be returned; use 0 to get results from pinned and the newest story

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of stories to be returned

- For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Defined in

dist/generated/types.d.ts:87636
