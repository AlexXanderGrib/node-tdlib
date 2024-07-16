[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewChosenInlineResult$Input

# Type Alias: updateNewChosenInlineResult$Input

> **updateNewChosenInlineResult$Input**: `object`

Version of [updateNewChosenInlineResult](updateNewChosenInlineResult.md) for method parameters.

The user has chosen a result of an inline query; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewChosenInlineResult"`

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Identifier of the sent inline message, if known

### query?

> `readonly` `optional` **query**: `string`

Text of the query

### result\_id?

> `readonly` `optional` **result\_id**: `string`

Identifier of the chosen result

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

### user\_location?

> `readonly` `optional` **user\_location**: [`location$Input`](location$Input-1.md) \| `null`

User location; may be null

## Defined in

dist/generated/types.d.ts:57354
