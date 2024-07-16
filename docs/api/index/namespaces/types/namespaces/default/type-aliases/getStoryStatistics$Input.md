[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStoryStatistics$Input

# Type Alias: getStoryStatistics$Input

> **getStoryStatistics$Input**: `object`

Returns detailed statistics about a story. Can be used only if story.can_get_statistics == true

## Type declaration

### \_

> `readonly` **\_**: `"getStoryStatistics"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### is\_dark?

> `readonly` `optional` **is\_dark**: [`Bool$Input`](Bool$Input.md)

Pass true if a dark theme is used by the application

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Story identifier

## Defined in

dist/generated/types.d.ts:98697
