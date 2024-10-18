[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stories$Input

# Type Alias: stories$Input

> **stories$Input**: `object`

Version of [stories](stories.md) for method parameters.

Represents a list of stories

## Type declaration

### \_

> `readonly` **\_**: `"stories"`

### pinned\_story\_ids?

> `readonly` `optional` **pinned\_story\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

Identifiers of the pinned stories; returned only in getChatPostedToChatPageStories with from_story_id == 0

### stories?

> `readonly` `optional` **stories**: [`vector$Input`](vector$Input.md)\<[`story$Input`](story$Input.md)\>

The list of stories

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Approximate total number of stories found

## Defined in

dist/generated/types.d.ts:34344
