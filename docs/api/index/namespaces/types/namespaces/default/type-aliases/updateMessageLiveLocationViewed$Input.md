[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageLiveLocationViewed$Input

# Type Alias: updateMessageLiveLocationViewed$Input

> **updateMessageLiveLocationViewed$Input**: `object`

Version of [updateMessageLiveLocationViewed](updateMessageLiveLocationViewed.md) for method parameters.

A message with a live location was viewed. When the update is received, the application is supposed to update the live location

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageLiveLocationViewed"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat with the live location message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message with live location

## Defined in

dist/generated/types.d.ts:53175
