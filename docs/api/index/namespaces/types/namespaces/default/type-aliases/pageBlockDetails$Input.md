[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockDetails$Input

# Type Alias: pageBlockDetails$Input

> **pageBlockDetails$Input**: `object`

Version of [pageBlockDetails](pageBlockDetails.md) for method parameters.

A collapsible block

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockDetails"`

### header?

> `readonly` `optional` **header**: [`RichText$Input`](RichText$Input.md)

Always visible heading for the block

### is\_open?

> `readonly` `optional` **is\_open**: [`Bool$Input`](Bool$Input.md)

True, if the block is open by default

### page\_blocks?

> `readonly` `optional` **page\_blocks**: [`vector$Input`](vector$Input.md)\<[`PageBlock$Input`](PageBlock$Input.md)\>

Block contents

## Defined in

dist/generated/types.d.ts:21232
