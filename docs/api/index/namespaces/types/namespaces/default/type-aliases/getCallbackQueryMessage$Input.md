[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getCallbackQueryMessage$Input

# Type Alias: getCallbackQueryMessage$Input

> **getCallbackQueryMessage$Input**: `object`

Returns information about a message with the callback button that originated a callback query; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"getCallbackQueryMessage"`

### callback\_query\_id?

> `readonly` `optional` **callback\_query\_id**: [`int64$Input`](int64$Input.md)

Identifier of the callback query

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

## Defined in

dist/generated/types.d.ts:76714
