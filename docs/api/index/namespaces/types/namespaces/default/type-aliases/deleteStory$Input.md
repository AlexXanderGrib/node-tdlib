[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteStory$Input

# Type Alias: deleteStory$Input

> **deleteStory$Input**: `object`

Deletes a previously sent story. Can be called only if story.can_be_deleted == true

## Type declaration

### \_

> `readonly` **\_**: `"deleteStory"`

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Identifier of the story to delete

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53-1.md)

Identifier of the chat that posted the story

## Defined in

dist/generated/types.d.ts:87479
