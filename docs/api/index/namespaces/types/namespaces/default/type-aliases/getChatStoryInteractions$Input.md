[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatStoryInteractions$Input

# Type Alias: getChatStoryInteractions$Input

> **getChatStoryInteractions$Input**: `object`

Returns interactions with a story posted in a chat. Can be used only if story is posted on behalf of a chat and the user is an administrator in the chat

## Type declaration

### \_

> `readonly` **\_**: `"getChatStoryInteractions"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of story interactions to return

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### prefer\_forwards?

> `readonly` `optional` **prefer\_forwards**: [`Bool$Input`](Bool$Input.md)

Pass true to get forwards and reposts first, then reactions, then other views; pass false to get interactions sorted just by interaction date

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md) \| `null`

Pass the default heart reaction or a suggested reaction type to receive only interactions with the specified reaction type; pass null to receive all interactions

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Story identifier

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53-1.md)

The identifier of the sender of the story

## Defined in

dist/generated/types.d.ts:88038
