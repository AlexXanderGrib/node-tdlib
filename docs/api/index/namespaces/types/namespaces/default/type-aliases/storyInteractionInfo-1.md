[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyInteractionInfo

# Type Alias: storyInteractionInfo

> **storyInteractionInfo**: `object`

Contains information about interactions with a story

## Type declaration

### \_

> **\_**: `"storyInteractionInfo"`

### forward\_count

> **forward\_count**: [`int32`](int32-1.md)

Number of times the story was forwarded; 0 if none or unknown

### reaction\_count

> **reaction\_count**: [`int32`](int32-1.md)

Number of reactions added to the story; 0 if none or unknown

### recent\_viewer\_user\_ids

> **recent\_viewer\_user\_ids**: [`vector`](vector.md)\<[`int53`](int53-1.md)\>

Identifiers of at most 3 recent viewers of the story

### view\_count

> **view\_count**: [`int32`](int32-1.md)

Number of times the story was viewed

## Defined in

dist/generated/types.d.ts:32735
