[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notificationTypeNewPushMessage

# Type Alias: notificationTypeNewPushMessage

> **notificationTypeNewPushMessage**: `object`

New message was received through a push notification

## Type declaration

### \_

> **\_**: `"notificationTypeNewPushMessage"`

### content

> **content**: [`PushMessageContent`](PushMessageContent.md)

Push message content

### is\_outgoing

> **is\_outgoing**: [`Bool`](Bool.md)

True, if the message is outgoing

### message\_id

> **message\_id**: [`int53`](int53.md)

The message identifier. The message will not be available in the chat history, but the identifier can be used in viewMessages, or as a message to be replied in the same chat

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md)

Identifier of the sender of the message. Corresponding user or chat may be inaccessible

### sender\_name

> **sender\_name**: `string`

Name of the sender

## Defined in

dist/generated/types.d.ts:46829
