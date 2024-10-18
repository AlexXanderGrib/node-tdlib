[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatMessageSender

# Type Alias: updateChatMessageSender

> **updateChatMessageSender**: `object`

The message sender that is selected to send messages in a chat has changed

## Type declaration

### \_

> **\_**: `"updateChatMessageSender"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_sender\_id

> **message\_sender\_id**: [`MessageSender`](MessageSender.md) \| `null`

New value of message_sender_id; may be null if the user can't change message sender

## Defined in

dist/generated/types.d.ts:55401
