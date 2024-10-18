[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getCallbackQueryAnswer$Input

# Type Alias: getCallbackQueryAnswer$Input

> **getCallbackQueryAnswer$Input**: `object`

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

## Type declaration

### \_

> `readonly` **\_**: `"getCallbackQueryAnswer"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat with the message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message from which the query originated. The message must not be scheduled

### payload?

> `readonly` `optional` **payload**: [`CallbackQueryPayload$Input`](CallbackQueryPayload$Input.md)

Query payload

## Defined in

dist/generated/types.d.ts:85386
