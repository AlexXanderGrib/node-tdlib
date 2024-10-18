[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatArchivedStories$DirectInput

# Type Alias: getChatArchivedStories$DirectInput

> **getChatArchivedStories$DirectInput**: `object`

Returns the list of all stories posted by the given chat; requires can_edit_stories right in the chat.

- The stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### from\_story\_id?

> `readonly` `optional` **from\_story\_id**: [`int32`](int32.md)

Identifier of the story starting from which stories must be returned; use 0 to get results from the last story

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of stories to be returned

- For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Defined in

dist/generated/types.d.ts:90094
