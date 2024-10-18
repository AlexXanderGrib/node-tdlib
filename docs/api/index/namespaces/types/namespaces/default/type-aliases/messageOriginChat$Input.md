[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageOriginChat$Input

# Type Alias: messageOriginChat$Input

> **messageOriginChat$Input**: `object`

Version of [messageOriginChat](messageOriginChat.md) for method parameters.

The message was originally sent on behalf of a chat

## Type declaration

### \_

> `readonly` **\_**: `"messageOriginChat"`

### author\_signature?

> `readonly` `optional` **author\_signature**: `string`

For messages originally sent by an anonymous chat administrator, original message author signature

### sender\_chat\_id?

> `readonly` `optional` **sender\_chat\_id**: [`int53`](int53.md)

Identifier of the chat that originally sent the message

## Defined in

dist/generated/types.d.ts:12911
