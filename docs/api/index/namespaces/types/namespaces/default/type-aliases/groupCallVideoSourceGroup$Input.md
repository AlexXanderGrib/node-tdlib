[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallVideoSourceGroup$Input

# Type Alias: groupCallVideoSourceGroup$Input

> **groupCallVideoSourceGroup$Input**: `object`

Version of [groupCallVideoSourceGroup](groupCallVideoSourceGroup.md) for method parameters.

Describes a group of video synchronization source identifiers

## Type declaration

### \_

> `readonly` **\_**: `"groupCallVideoSourceGroup"`

### semantics?

> `readonly` `optional` **semantics**: `string`

The semantics of sources, one of "SIM" or "FID"

### source\_ids?

> `readonly` `optional` **source\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The list of synchronization source identifiers

## Defined in

dist/generated/types.d.ts:36847
