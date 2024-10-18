[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewBusinessCallbackQuery$Input

# Type Alias: updateNewBusinessCallbackQuery$Input

> **updateNewBusinessCallbackQuery$Input**: `object`

Version of [updateNewBusinessCallbackQuery](updateNewBusinessCallbackQuery.md) for method parameters.

A new incoming callback query from a business message; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateNewBusinessCallbackQuery"`

### chat\_instance?

> `readonly` `optional` **chat\_instance**: [`int64$Input`](int64$Input.md)

An identifier uniquely corresponding to the chat a message was sent to

### connection\_id?

> `readonly` `optional` **connection\_id**: `string`

Unique identifier of the business connection

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique query identifier

### message?

> `readonly` `optional` **message**: [`businessMessage$Input`](businessMessage$Input.md)

The message from the business account from which the query originated

### payload?

> `readonly` `optional` **payload**: [`CallbackQueryPayload$Input`](CallbackQueryPayload$Input.md)

Query payload

### sender\_user\_id?

> `readonly` `optional` **sender\_user\_id**: [`int53`](int53.md)

Identifier of the user who sent the query

## Defined in

dist/generated/types.d.ts:59201
