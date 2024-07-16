[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stories

# Type Alias: stories

> **stories**: `object`

Represents a list of stories

## Type declaration

### \_

> **\_**: `"stories"`

### pinned\_story\_ids

> **pinned\_story\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

Identifiers of the pinned stories; returned only in getChatPostedToChatPageStories with from_story_id == 0

### stories

> **stories**: [`vector`](vector.md)\<[`story`](story-1.md)\>

The list of stories

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Approximate total number of stories found

## Defined in

dist/generated/types.d.ts:33043
