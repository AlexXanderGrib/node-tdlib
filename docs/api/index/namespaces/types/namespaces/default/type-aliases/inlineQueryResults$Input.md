[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inlineQueryResults$Input

# Type Alias: inlineQueryResults$Input

> **inlineQueryResults$Input**: `object`

Version of [inlineQueryResults](inlineQueryResults.md) for method parameters.

Represents the results of the inline query. Use sendInlineQueryResultMessage to send the result of the query

## Type declaration

### \_

> `readonly` **\_**: `"inlineQueryResults"`

### button?

> `readonly` `optional` **button**: [`inlineQueryResultsButton$Input`](inlineQueryResultsButton$Input.md) \| `null`

Button to be shown above inline query results; may be null

### inline\_query\_id?

> `readonly` `optional` **inline\_query\_id**: [`int64$Input`](int64$Input.md)

Unique identifier of the inline query

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### results?

> `readonly` `optional` **results**: [`vector$Input`](vector$Input.md)\<[`InlineQueryResult$Input`](InlineQueryResult$Input.md)\>

Results of the query

## Defined in

dist/generated/types.d.ts:40315
