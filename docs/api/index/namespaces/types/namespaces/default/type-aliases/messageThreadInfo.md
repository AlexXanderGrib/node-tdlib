[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageThreadInfo

# Type Alias: messageThreadInfo

> **messageThreadInfo**: `object`

Contains information about a message thread

## Type declaration

### \_

> **\_**: `"messageThreadInfo"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message thread belongs

### draft\_message

> **draft\_message**: [`draftMessage`](draftMessage.md) \| `null`

A draft of a message in the message thread; may be null if none

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier, unique within the chat

### messages

> **messages**: [`vector`](vector.md)\<[`message`](message.md)\>

The messages from which the thread starts. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)

### reply\_info

> **reply\_info**: [`messageReplyInfo`](messageReplyInfo.md) \| `null`

Information about the message thread; may be null for forum topic threads

### unread\_message\_count

> **unread\_message\_count**: [`int32`](int32.md)

Approximate number of unread messages in the message thread

## Defined in

dist/generated/types.d.ts:18695
