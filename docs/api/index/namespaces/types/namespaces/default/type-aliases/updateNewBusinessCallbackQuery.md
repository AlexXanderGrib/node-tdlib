[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewBusinessCallbackQuery

# Type Alias: updateNewBusinessCallbackQuery

> **updateNewBusinessCallbackQuery**: `object`

A new incoming callback query from a business message; for bots only

## Type declaration

### \_

> **\_**: `"updateNewBusinessCallbackQuery"`

### chat\_instance

> **chat\_instance**: [`int64`](int64-1.md)

An identifier uniquely corresponding to the chat a message was sent to

### connection\_id

> **connection\_id**: `string`

Unique identifier of the business connection

### id

> **id**: [`int64`](int64-1.md)

Unique query identifier

### message

> **message**: [`businessMessage`](businessMessage-1.md)

The message from the business account from which the query originated

### payload

> **payload**: [`CallbackQueryPayload`](CallbackQueryPayload.md)

Query payload

### sender\_user\_id

> **sender\_user\_id**: [`int53`](int53-1.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:57523
