[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteractionInfo$Input

# Type Alias: storyInteractionInfo$Input

> **storyInteractionInfo$Input**: `object`

Version of [storyInteractionInfo](storyInteractionInfo.md) for method parameters.

Contains information about interactions with a story

## Type declaration

### \_

> `readonly` **\_**: `"storyInteractionInfo"`

### forward\_count?

> `readonly` `optional` **forward\_count**: [`int32`](int32.md)

Number of times the story was forwarded; 0 if none or unknown

### reaction\_count?

> `readonly` `optional` **reaction\_count**: [`int32`](int32.md)

Number of reactions added to the story; 0 if none or unknown

### recent\_viewer\_user\_ids?

> `readonly` `optional` **recent\_viewer\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of at most 3 recent viewers of the story

### view\_count?

> `readonly` `optional` **view\_count**: [`int32`](int32.md)

Number of times the story was viewed

## Defined in

dist/generated/types.d.ts:34041
