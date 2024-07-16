[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteractions$Input

# Type Alias: storyInteractions$Input

> **storyInteractions$Input**: `object`

Version of [storyInteractions](storyInteractions-1.md) for method parameters.

Represents a list of interactions with a story

## Type declaration

### \_

> `readonly` **\_**: `"storyInteractions"`

### interactions?

> `readonly` `optional` **interactions**: [`vector$Input`](vector$Input.md)\<[`storyInteraction$Input`](storyInteraction$Input-1.md)\>

List of story interactions

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of interactions found

### total\_forward\_count?

> `readonly` `optional` **total\_forward\_count**: [`int32`](int32-1.md)

Approximate total number of found forwards and reposts; always 0 for chat stories

### total\_reaction\_count?

> `readonly` `optional` **total\_reaction\_count**: [`int32`](int32-1.md)

Approximate total number of found reactions; always 0 for chat stories

## Defined in

dist/generated/types.d.ts:33432
