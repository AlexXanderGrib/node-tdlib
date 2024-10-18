[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageForwardInfo$Input

# Type Alias: messageForwardInfo$Input

> **messageForwardInfo$Input**: `object`

Version of [messageForwardInfo](messageForwardInfo.md) for method parameters.

Contains information about a forwarded message

## Type declaration

### \_

> `readonly` **\_**: `"messageForwardInfo"`

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was originally sent

### origin?

> `readonly` `optional` **origin**: [`MessageOrigin$Input`](MessageOrigin$Input.md)

Origin of the forwarded message

### public\_service\_announcement\_type?

> `readonly` `optional` **public\_service\_announcement\_type**: `string`

The type of public service announcement for the forwarded message

### source?

> `readonly` `optional` **source**: [`forwardSource$Input`](forwardSource$Input.md) \| `null`

For messages forwarded to the chat with the current user (Saved Messages), to the Replies bot chat, or to the channel's discussion group, information about the source message from which the message was forwarded last time; may be null for other forwards or if unknown

## Defined in

dist/generated/types.d.ts:13199
