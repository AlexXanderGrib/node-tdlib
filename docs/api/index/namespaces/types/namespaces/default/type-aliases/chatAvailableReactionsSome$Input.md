[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatAvailableReactionsSome$Input

# Type Alias: chatAvailableReactionsSome$Input

> **chatAvailableReactionsSome$Input**: `object`

Version of [chatAvailableReactionsSome](chatAvailableReactionsSome.md) for method parameters.

Only specific reactions are available in the chat

## Type declaration

### \_

> `readonly` **\_**: `"chatAvailableReactionsSome"`

### max\_reaction\_count?

> `readonly` `optional` **max\_reaction\_count**: [`int32`](int32.md)

The maximum allowed number of reactions per message; 1-11

### reactions?

> `readonly` `optional` **reactions**: [`vector$Input`](vector$Input.md)\<[`ReactionType$Input`](ReactionType$Input.md)\>

The list of reactions

## Defined in

dist/generated/types.d.ts:16697
