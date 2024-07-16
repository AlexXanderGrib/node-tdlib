[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewCallbackQuery$Input

# Type Alias: updateNewCallbackQuery$Input

> **updateNewCallbackQuery$Input**: `object`

Version of [updateNewCallbackQuery](updateNewCallbackQuery.md) for method parameters.

A new incoming callback query; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewCallbackQuery"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat where the query was sent

### chat\_instance?

> `readonly` `optional` **chat\_instance**: [`int64$Input`](int64$Input-1.md)

Identifier that uniquely corresponds to the chat to which the message was sent

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Unique query identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message from which the query originated

### payload?

> `readonly` `optional` **payload**: [`CallbackQueryPayload$Input`](CallbackQueryPayload$Input.md)

Query payload

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:57423
