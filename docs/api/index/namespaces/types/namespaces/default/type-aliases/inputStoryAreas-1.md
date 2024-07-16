[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputStoryAreas

# Type Alias: inputStoryAreas

> **inputStoryAreas**: `object`

Contains a list of story areas to be added

## Type declaration

### \_

> **\_**: `"inputStoryAreas"`

### areas

> **areas**: [`vector`](vector.md)\<[`inputStoryArea`](inputStoryArea-1.md)\>

List of input story areas. Currently, a story can have

- up to 10 inputStoryAreaTypeLocation, inputStoryAreaTypeFoundVenue, and inputStoryAreaTypePreviousVenue areas,

- up to getOption("story_suggested_reaction_area_count_max") inputStoryAreaTypeSuggestedReaction areas,

- up to 1 inputStoryAreaTypeMessage area, and

- up to getOption("story_link_area_count_max") inputStoryAreaTypeLink areas if the current user is a Telegram Premium user

## Defined in

dist/generated/types.d.ts:32311
