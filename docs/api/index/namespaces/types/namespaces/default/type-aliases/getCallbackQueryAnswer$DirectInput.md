[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getCallbackQueryAnswer$DirectInput

# Type Alias: getCallbackQueryAnswer$DirectInput

> **getCallbackQueryAnswer$DirectInput**: `object`

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat with the message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message from which the query originated

### payload?

> `readonly` `optional` **payload**: [`CallbackQueryPayload$Input`](CallbackQueryPayload$Input.md)

Query payload

## Defined in

dist/generated/types.d.ts:83108
