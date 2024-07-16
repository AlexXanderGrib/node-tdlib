[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStoryPublicForwards$Input

# Type Alias: getStoryPublicForwards$Input

> **getStoryPublicForwards$Input**: `object`

Returns forwards of a story as a message to public chats and reposts by public channels. Can be used only if the story is posted on behalf of the current user or story.can_get_statistics == true.

- For optimal performance, the number of returned messages and stories is chosen by TDLib

## Type declaration

### \_

> `readonly` **\_**: `"getStoryPublicForwards"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages and stories to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

The identifier of the story

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53-1.md)

The identifier of the sender of the story

## Defined in

dist/generated/types.d.ts:88199
