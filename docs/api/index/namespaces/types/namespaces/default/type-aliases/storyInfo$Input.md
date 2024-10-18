[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInfo$Input

# Type Alias: storyInfo$Input

> **storyInfo$Input**: `object`

Version of [storyInfo](storyInfo.md) for method parameters.

Contains basic information about a story

## Type declaration

### \_

> `readonly` **\_**: `"storyInfo"`

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the story was published

### is\_for\_close\_friends?

> `readonly` `optional` **is\_for\_close\_friends**: [`Bool$Input`](Bool$Input.md)

True, if the story is available only to close friends

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

Unique story identifier among stories of the given sender

## Defined in

dist/generated/types.d.ts:34466
