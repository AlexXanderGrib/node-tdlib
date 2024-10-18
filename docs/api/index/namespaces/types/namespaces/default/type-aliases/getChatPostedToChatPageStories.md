[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatPostedToChatPageStories

# Type Alias: getChatPostedToChatPageStories()

> **getChatPostedToChatPageStories**: (`parameters`) => [`Stories`](Stories-1.md)

Returns the list of stories that posted by the given chat to its chat page. If from_story_id == 0, then pinned stories are returned first.

- Then, stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

## Parameters

• **parameters**: [`getChatPostedToChatPageStories$Input`](getChatPostedToChatPageStories$Input.md)

[getChatPostedToChatPageStories$Input](getChatPostedToChatPageStories$Input.md)

## Returns

[`Stories`](Stories-1.md)

[Stories](Stories-1.md)

## Defined in

dist/generated/types.d.ts:90063
