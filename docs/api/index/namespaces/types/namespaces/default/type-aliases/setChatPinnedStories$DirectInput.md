[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatPinnedStories$DirectInput

# Type Alias: setChatPinnedStories$DirectInput

> **setChatPinnedStories$DirectInput**: `object`

Changes the list of pinned stories on a chat page; requires can_edit_stories right in the chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the stories

### story\_ids?

> `readonly` `optional` **story\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

New list of pinned stories. All stories must be posted to the chat page first. There can be up to getOption("pinned_story_count_max") pinned stories on a chat page

## Defined in

dist/generated/types.d.ts:90141
