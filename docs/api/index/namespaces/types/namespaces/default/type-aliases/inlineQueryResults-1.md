[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inlineQueryResults

# Type Alias: inlineQueryResults

> **inlineQueryResults**: `object`

Represents the results of the inline query. Use sendInlineQueryResultMessage to send the result of the query

## Type declaration

### \_

> **\_**: `"inlineQueryResults"`

### button

> **button**: [`inlineQueryResultsButton`](inlineQueryResultsButton-1.md) \| `null`

Button to be shown above inline query results; may be null

### inline\_query\_id

> **inline\_query\_id**: [`int64`](int64-1.md)

Unique identifier of the inline query

### next\_offset

> **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### results

> **results**: [`vector`](vector.md)\<[`InlineQueryResult`](InlineQueryResult.md)\>

Results of the query

## Defined in

dist/generated/types.d.ts:38917
