[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewChosenInlineResult

# Type Alias: updateNewChosenInlineResult

> **updateNewChosenInlineResult**: `object`

The user has chosen a result of an inline query; for bots only

## Type declaration

### \_

> **\_**: `"updateNewChosenInlineResult"`

### inline\_message\_id

> **inline\_message\_id**: `string`

Identifier of the sent inline message, if known

### query

> **query**: `string`

Text of the query

### result\_id

> **result\_id**: `string`

Identifier of the chosen result

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53.md)

Identifier of the user who sent the query

### user\_location

> **user\_location**: [`location`](location.md) \| `null`

User location; may be null

## Defined in

dist/generated/types.d.ts:58961
