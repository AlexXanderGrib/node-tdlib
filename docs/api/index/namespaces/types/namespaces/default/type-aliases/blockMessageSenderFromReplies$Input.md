[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / blockMessageSenderFromReplies$Input

# Type Alias: blockMessageSenderFromReplies$Input

> **blockMessageSenderFromReplies$Input**: `object`

Blocks an original sender of a message in the Replies chat

## Type declaration

### \_

> `readonly` **\_**: `"blockMessageSenderFromReplies"`

### delete\_all\_messages?

> `readonly` `optional` **delete\_all\_messages**: [`Bool$Input`](Bool$Input.md)

Pass true to delete all messages from the same sender

### delete\_message?

> `readonly` `optional` **delete\_message**: [`Bool$Input`](Bool$Input.md)

Pass true to delete the message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

The identifier of an incoming message in the Replies chat

### report\_spam?

> `readonly` `optional` **report\_spam**: [`Bool$Input`](Bool$Input.md)

Pass true to report the sender to the Telegram moderators

## Defined in

dist/generated/types.d.ts:94444
