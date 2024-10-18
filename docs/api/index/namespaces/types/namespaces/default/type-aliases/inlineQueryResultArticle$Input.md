[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inlineQueryResultArticle$Input

# Type Alias: inlineQueryResultArticle$Input

> **inlineQueryResultArticle$Input**: `object`

Version of [inlineQueryResultArticle](inlineQueryResultArticle.md) for method parameters.

Represents a link to an article or web page

## Type declaration

### \_

> `readonly` **\_**: `"inlineQueryResultArticle"`

### description?

> `readonly` `optional` **description**: `string`

Represents a link to an article or web page

### hide\_url?

> `readonly` `optional` **hide\_url**: [`Bool$Input`](Bool$Input.md)

True, if the URL must be not shown

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Result thumbnail in JPEG format; may be null

### title?

> `readonly` `optional` **title**: `string`

Title of the result

### url?

> `readonly` `optional` **url**: `string`

URL of the result, if it exists

## Defined in

dist/generated/types.d.ts:39675
