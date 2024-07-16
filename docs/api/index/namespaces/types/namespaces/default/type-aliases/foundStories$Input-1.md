[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundStories$Input

# Type Alias: foundStories$Input

> **foundStories$Input**: `object`

Version of [foundStories](foundStories-1.md) for method parameters.

Contains a list of stories found by a search

## Type declaration

### \_

> `readonly` **\_**: `"foundStories"`

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### stories?

> `readonly` `optional` **stories**: [`vector$Input`](vector$Input.md)\<[`story$Input`](story$Input-1.md)\>

List of stories

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of stories found

## Defined in

dist/generated/types.d.ts:33110
