[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getInlineQueryResults$Input

# Type Alias: getInlineQueryResults$Input

> **getInlineQueryResults$Input**: `object`

Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

## Type declaration

### \_

> `readonly` **\_**: `"getInlineQueryResults"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat where the query was sent

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return; use empty string to get the first chunk of results

### query?

> `readonly` `optional` **query**: `string`

Text of the query

### user\_location?

> `readonly` `optional` **user\_location**: [`location$Input`](location$Input-1.md) \| `null`

Location of the user; pass null if unknown or the bot doesn't need user's location

## Defined in

dist/generated/types.d.ts:82549
