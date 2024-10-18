[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageForwardInfo

# Type Alias: messageForwardInfo

> **messageForwardInfo**: `object`

Contains information about a forwarded message

## Type declaration

### \_

> **\_**: `"messageForwardInfo"`

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was originally sent

### origin

> **origin**: [`MessageOrigin`](MessageOrigin.md)

Origin of the forwarded message

### public\_service\_announcement\_type

> **public\_service\_announcement\_type**: `string`

The type of public service announcement for the forwarded message

### source

> **source**: [`forwardSource`](forwardSource.md) \| `null`

For messages forwarded to the chat with the current user (Saved Messages), to the Replies bot chat, or to the channel's discussion group, information about the source message from which the message was forwarded last time; may be null for other forwards or if unknown

## Defined in

dist/generated/types.d.ts:13171
