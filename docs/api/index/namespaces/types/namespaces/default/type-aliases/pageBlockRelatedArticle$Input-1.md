[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockRelatedArticle$Input

# Type Alias: pageBlockRelatedArticle$Input

> **pageBlockRelatedArticle$Input**: `object`

Version of [pageBlockRelatedArticle](pageBlockRelatedArticle-1.md) for method parameters.

Contains information about a related article

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockRelatedArticle"`

### author?

> `readonly` `optional` **author**: `string`

Article author; may be empty

### description?

> `readonly` `optional` **description**: `string`

Contains information about a related article

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input-1.md) \| `null`

Article photo; may be null

### publish\_date?

> `readonly` `optional` **publish\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the article was published; 0 if unknown

### title?

> `readonly` `optional` **title**: `string`

Article title; may be empty

### url?

> `readonly` `optional` **url**: `string`

Related article URL

## Defined in

dist/generated/types.d.ts:19603
