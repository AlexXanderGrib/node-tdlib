[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addedReactions$Input

# Type Alias: addedReactions$Input

> **addedReactions$Input**: `object`

Version of [addedReactions](addedReactions.md) for method parameters.

Represents a list of reactions added to a message

## Type declaration

### \_

> `readonly` **\_**: `"addedReactions"`

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### reactions?

> `readonly` `optional` **reactions**: [`vector$Input`](vector$Input.md)\<[`addedReaction$Input`](addedReaction$Input.md)\>

The list of added reactions

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

The total number of found reactions

## Defined in

dist/generated/types.d.ts:37500
