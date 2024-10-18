[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatMessageSender$Input

# Type Alias: updateChatMessageSender$Input

> **updateChatMessageSender$Input**: `object`

Version of [updateChatMessageSender](updateChatMessageSender.md) for method parameters.

The message sender that is selected to send messages in a chat has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatMessageSender"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_sender\_id?

> `readonly` `optional` **message\_sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

New value of message_sender_id; may be null if the user can't change message sender

## Defined in

dist/generated/types.d.ts:55419
