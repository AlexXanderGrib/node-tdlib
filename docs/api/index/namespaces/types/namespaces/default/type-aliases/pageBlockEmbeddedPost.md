[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockEmbeddedPost

# Type Alias: pageBlockEmbeddedPost

> **pageBlockEmbeddedPost**: `object`

An embedded post

## Type declaration

### \_

> **\_**: `"pageBlockEmbeddedPost"`

### author

> **author**: `string`

Post author

### author\_photo

> **author\_photo**: [`photo`](photo-1.md) \| `null`

Post author photo; may be null

### caption

> **caption**: [`pageBlockCaption`](pageBlockCaption-1.md)

Post caption

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the post was created; 0 if unknown

### page\_blocks

> **page\_blocks**: [`vector`](vector.md)\<[`PageBlock`](PageBlock.md)\>

Post content

### url

> **url**: `string`

URL of the embedded post

## Defined in

dist/generated/types.d.ts:20333
