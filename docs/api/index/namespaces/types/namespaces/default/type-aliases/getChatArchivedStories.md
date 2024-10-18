[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatArchivedStories

# Type Alias: getChatArchivedStories()

> **getChatArchivedStories**: (`parameters`) => [`Stories`](Stories-1.md)

Returns the list of all stories posted by the given chat; requires can_edit_stories right in the chat.

- The stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

## Parameters

• **parameters**: [`getChatArchivedStories$Input`](getChatArchivedStories$Input.md)

[getChatArchivedStories$Input](getChatArchivedStories$Input.md)

## Returns

[`Stories`](Stories-1.md)

[Stories](Stories-1.md)

## Defined in

dist/generated/types.d.ts:90121
