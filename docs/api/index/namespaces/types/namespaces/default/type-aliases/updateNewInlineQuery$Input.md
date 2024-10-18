[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewInlineQuery$Input

# Type Alias: updateNewInlineQuery$Input

> **updateNewInlineQuery$Input**: `object`

Version of [updateNewInlineQuery](updateNewInlineQuery.md) for method parameters.

A new incoming inline query; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewInlineQuery"`

### chat\_type?

> `readonly` `optional` **chat\_type**: [`ChatType$Input`](ChatType$Input.md) \| `null`

The type of the chat from which the query originated; may be null if unknown

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique query identifier

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return

### query?

> `readonly` `optional` **query**: `string`

Text of the query

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53.md)

Identifier of the user who sent the query

### user\_location?

> `readonly` `optional` **user\_location**: [`location$Input`](location$Input.md) \| `null`

User location; may be null

## Defined in

dist/generated/types.d.ts:58925
