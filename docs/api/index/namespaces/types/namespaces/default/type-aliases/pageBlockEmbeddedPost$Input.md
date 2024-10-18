[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockEmbeddedPost$Input

# Type Alias: pageBlockEmbeddedPost$Input

> **pageBlockEmbeddedPost$Input**: `object`

Version of [pageBlockEmbeddedPost](pageBlockEmbeddedPost.md) for method parameters.

An embedded post

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockEmbeddedPost"`

### author?

> `readonly` `optional` **author**: `string`

Post author

### author\_photo?

> `readonly` `optional` **author\_photo**: [`photo$Input`](photo$Input.md) \| `null`

Post author photo; may be null

### caption?

> `readonly` `optional` **caption**: [`pageBlockCaption$Input`](pageBlockCaption$Input.md)

Post caption

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the post was created; 0 if unknown

### page\_blocks?

> `readonly` `optional` **page\_blocks**: [`vector$Input`](vector$Input.md)\<[`PageBlock$Input`](PageBlock$Input.md)\>

Post content

### url?

> `readonly` `optional` **url**: `string`

URL of the embedded post

## Defined in

dist/generated/types.d.ts:20997
