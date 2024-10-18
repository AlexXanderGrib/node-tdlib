[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewInlineQuery

# Type Alias: updateNewInlineQuery

> **updateNewInlineQuery**: `object`

A new incoming inline query; for bots only

## Type declaration

### \_

> **\_**: `"updateNewInlineQuery"`

### chat\_type

> **chat\_type**: [`ChatType`](ChatType.md) \| `null`

The type of the chat from which the query originated; may be null if unknown

### id

> **id**: [`int64`](int64.md)

Unique query identifier

### offset

> **offset**: `string`

Offset of the first entry to return

### query

> **query**: `string`

Text of the query

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53.md)

Identifier of the user who sent the query

### user\_location

> **user\_location**: [`location`](location.md) \| `null`

User location; may be null

## Defined in

dist/generated/types.d.ts:58887
