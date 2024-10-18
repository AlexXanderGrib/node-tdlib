[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundMessages$Input

# Type Alias: foundMessages$Input

> **foundMessages$Input**: `object`

Version of [foundMessages](foundMessages.md) for method parameters.

Contains a list of messages found by a search

## Type declaration

### \_

> `readonly` **\_**: `"foundMessages"`

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`message$Input`](message$Input.md)\>

List of messages

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Approximate total number of messages found; -1 if unknown

## Defined in

dist/generated/types.d.ts:14534
