[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteractions

# Type Alias: storyInteractions

> **storyInteractions**: `object`

Represents a list of interactions with a story

## Type declaration

### \_

> **\_**: `"storyInteractions"`

### interactions

> **interactions**: [`vector`](vector.md)\<[`storyInteraction`](storyInteraction-1.md)\>

List of story interactions

### next\_offset

> **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Approximate total number of interactions found

### total\_forward\_count

> **total\_forward\_count**: [`int32`](int32-1.md)

Approximate total number of found forwards and reposts; always 0 for chat stories

### total\_reaction\_count

> **total\_reaction\_count**: [`int32`](int32-1.md)

Approximate total number of found reactions; always 0 for chat stories

## Defined in

dist/generated/types.d.ts:33399
