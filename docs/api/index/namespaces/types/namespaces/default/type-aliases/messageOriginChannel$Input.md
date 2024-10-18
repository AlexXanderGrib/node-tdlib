[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageOriginChannel$Input

# Type Alias: messageOriginChannel$Input

> **messageOriginChannel$Input**: `object`

Version of [messageOriginChannel](messageOriginChannel.md) for method parameters.

The message was originally a post in a channel

## Type declaration

### \_

> `readonly` **\_**: `"messageOriginChannel"`

### author\_signature?

> `readonly` `optional` **author\_signature**: `string`

Original post author signature

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the channel chat to which the message was originally sent

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier of the original message

## Defined in

dist/generated/types.d.ts:12950
