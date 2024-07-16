[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewCallbackQuery

# Type Alias: updateNewCallbackQuery

> **updateNewCallbackQuery**: `object`

A new incoming callback query; for bots only

## Type declaration

### \_

> **\_**: `"updateNewCallbackQuery"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat where the query was sent

### chat\_instance

> **chat\_instance**: [`int64`](int64-1.md)

Identifier that uniquely corresponds to the chat to which the message was sent

### id

> **id**: [`int64`](int64-1.md)

Unique query identifier

### message\_id

> **message\_id**: [`int53`](int53-1.md)

Identifier of the message from which the query originated

### payload

> **payload**: [`CallbackQueryPayload`](CallbackQueryPayload.md)

Query payload

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:57385
