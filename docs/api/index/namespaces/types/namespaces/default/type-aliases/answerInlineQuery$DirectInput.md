[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / answerInlineQuery$DirectInput

# Type Alias: answerInlineQuery$DirectInput

> **answerInlineQuery$DirectInput**: `object`

Sets the result of an inline query; for bots only

## Type declaration

### button?

> `readonly` `optional` **button**: [`inlineQueryResultsButton$Input`](inlineQueryResultsButton$Input.md) \| `null`

Button to be shown above inline query results; pass null if none

### cache\_time?

> `readonly` `optional` **cache\_time**: [`int32`](int32.md)

Allowed time to cache the results of the query, in seconds

### inline\_query\_id?

> `readonly` `optional` **inline\_query\_id**: [`int64$Input`](int64$Input.md)

Identifier of the inline query

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

Pass true if results may be cached and returned only for the user that sent the query. By default, results may be returned to any user who sends the same query

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

Offset for the next inline query; pass an empty string if there are no more results

### results?

> `readonly` `optional` **results**: [`vector$Input`](vector$Input.md)\<[`InputInlineQueryResult$Input`](InputInlineQueryResult$Input.md)\>

The results of the query

## Defined in

dist/generated/types.d.ts:84846
