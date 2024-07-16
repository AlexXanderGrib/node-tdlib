[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notificationTypeNewPushMessage$Input

# Type Alias: notificationTypeNewPushMessage$Input

> **notificationTypeNewPushMessage$Input**: `object`

Version of [notificationTypeNewPushMessage](notificationTypeNewPushMessage.md) for method parameters.

New message was received through a push notification

## Type declaration

### \_

> `readonly` **\_**: `"notificationTypeNewPushMessage"`

### content?

> `readonly` `optional` **content**: [`PushMessageContent$Input`](PushMessageContent$Input.md)

Push message content

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the message is outgoing

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The message identifier. The message will not be available in the chat history, but the identifier can be used in viewMessages, or as a message to be replied in the same chat

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender of the message. Corresponding user or chat may be inaccessible

### sender\_name?

> `readonly` `optional` **sender\_name**: `string`

Name of the sender

## Defined in

dist/generated/types.d.ts:45336
