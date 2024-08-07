[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewInlineCallbackQuery

# Type Alias: updateNewInlineCallbackQuery

> **updateNewInlineCallbackQuery**: `object`

A new incoming callback query from a message sent via a bot; for bots only

## Type declaration

### \_

> **\_**: `"updateNewInlineCallbackQuery"`

### chat\_instance

> **chat\_instance**: [`int64`](int64-1.md)

An identifier uniquely corresponding to the chat a message was sent to

### id

> **id**: [`int64`](int64-1.md)

Unique query identifier

### inline\_message\_id

> **inline\_message\_id**: `string`

Identifier of the inline message from which the query originated

### payload

> **payload**: [`CallbackQueryPayload`](CallbackQueryPayload.md)

Query payload

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:57459
