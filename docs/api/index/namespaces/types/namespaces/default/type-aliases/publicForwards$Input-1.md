[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / publicForwards$Input

# Type Alias: publicForwards$Input

> **publicForwards$Input**: `object`

Version of [publicForwards](publicForwards-1.md) for method parameters.

Represents a list of public forwards and reposts as a story of a message or a story

## Type declaration

### \_

> `readonly` **\_**: `"publicForwards"`

### forwards?

> `readonly` `optional` **forwards**: [`vector$Input`](vector$Input.md)\<[`PublicForward$Input`](PublicForward$Input.md)\>

List of found public forwards and reposts

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of messages and stories found

## Defined in

dist/generated/types.d.ts:33706
