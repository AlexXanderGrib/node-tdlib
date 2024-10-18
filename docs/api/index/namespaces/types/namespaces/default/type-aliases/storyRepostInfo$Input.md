[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyRepostInfo$Input

# Type Alias: storyRepostInfo$Input

> **storyRepostInfo$Input**: `object`

Version of [storyRepostInfo](storyRepostInfo.md) for method parameters.

Contains information about original story that was reposted

## Type declaration

### \_

> `readonly` **\_**: `"storyRepostInfo"`

### is\_content\_modified?

> `readonly` `optional` **is\_content\_modified**: [`Bool$Input`](Bool$Input.md)

True, if story content was modified during reposting; otherwise, story wasn't modified

### origin?

> `readonly` `optional` **origin**: [`StoryOrigin$Input`](StoryOrigin$Input.md)

Origin of the story that was reposted

## Defined in

dist/generated/types.d.ts:33997
