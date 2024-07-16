[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewInlineCallbackQuery$Input

# Type Alias: updateNewInlineCallbackQuery$Input

> **updateNewInlineCallbackQuery$Input**: `object`

Version of [updateNewInlineCallbackQuery](updateNewInlineCallbackQuery.md) for method parameters.

A new incoming callback query from a message sent via a bot; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewInlineCallbackQuery"`

### chat\_instance?

> `readonly` `optional` **chat\_instance**: [`int64$Input`](int64$Input-1.md)

An identifier uniquely corresponding to the chat a message was sent to

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Unique query identifier

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Identifier of the inline message from which the query originated

### payload?

> `readonly` `optional` **payload**: [`CallbackQueryPayload$Input`](CallbackQueryPayload$Input.md)

Query payload

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:57492
