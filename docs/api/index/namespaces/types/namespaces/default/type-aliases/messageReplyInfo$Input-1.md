[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReplyInfo$Input

# Type Alias: messageReplyInfo$Input

> **messageReplyInfo$Input**: `object`

Version of [messageReplyInfo](messageReplyInfo-1.md) for method parameters.

Contains information about replies to a message

## Type declaration

### \_

> `readonly` **\_**: `"messageReplyInfo"`

### last\_message\_id?

> `readonly` `optional` **last\_message\_id**: [`int53`](int53-1.md)

Identifier of the last reply to the message

### last\_read\_inbox\_message\_id?

> `readonly` `optional` **last\_read\_inbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read incoming reply to the message

### last\_read\_outbox\_message\_id?

> `readonly` `optional` **last\_read\_outbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read outgoing reply to the message

### recent\_replier\_ids?

> `readonly` `optional` **recent\_replier\_ids**: [`vector$Input`](vector$Input.md)\<[`MessageSender$Input`](MessageSender$Input.md)\>

Identifiers of at most 3 recent repliers to the message; available in channels with a discussion supergroup. The users and chats are expected to be inaccessible: only their photo and name will be available

### reply\_count?

> `readonly` `optional` **reply\_count**: [`int32`](int32-1.md)

Number of times the message was directly or indirectly replied

## Defined in

dist/generated/types.d.ts:12610
