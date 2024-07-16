[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageThreadInfo$Input

# Type Alias: messageThreadInfo$Input

> **messageThreadInfo$Input**: `object`

Version of [messageThreadInfo](messageThreadInfo-1.md) for method parameters.

Contains information about a message thread

## Type declaration

### \_

> `readonly` **\_**: `"messageThreadInfo"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message thread belongs

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input-1.md) \| `null`

A draft of a message in the message thread; may be null if none

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

Message thread identifier, unique within the chat

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`message$Input`](message$Input-1.md)\>

The messages from which the thread starts. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id)

### reply\_info?

> `readonly` `optional` **reply\_info**: [`messageReplyInfo$Input`](messageReplyInfo$Input-1.md) \| `null`

Information about the message thread; may be null for forum topic threads

### unread\_message\_count?

> `readonly` `optional` **unread\_message\_count**: [`int32`](int32-1.md)

Approximate number of unread messages in the message thread

## Defined in

dist/generated/types.d.ts:18107
