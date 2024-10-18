[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyAreaTypeSuggestedReaction$Input

# Type Alias: storyAreaTypeSuggestedReaction$Input

> **storyAreaTypeSuggestedReaction$Input**: `object`

Version of [storyAreaTypeSuggestedReaction](storyAreaTypeSuggestedReaction.md) for method parameters.

An area pointing to a suggested reaction. App needs to show a clickable reaction on the area and call setStoryReaction when the are is clicked

## Type declaration

### \_

> `readonly` **\_**: `"storyAreaTypeSuggestedReaction"`

### is\_dark?

> `readonly` `optional` **is\_dark**: [`Bool$Input`](Bool$Input.md)

True, if reaction has a dark background

### is\_flipped?

> `readonly` `optional` **is\_flipped**: [`Bool$Input`](Bool$Input.md)

True, if reaction corner is flipped

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Number of times the reaction was added

## Defined in

dist/generated/types.d.ts:33121
