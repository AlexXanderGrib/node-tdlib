[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forumTopic$Input

# Type Alias: forumTopic$Input

> **forumTopic$Input**: `object`

Version of [forumTopic](forumTopic-1.md) for method parameters.

Describes a forum topic

## Type declaration

### \_

> `readonly` **\_**: `"forumTopic"`

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input-1.md) \| `null`

A draft of a message in the topic; may be null if none

### info?

> `readonly` `optional` **info**: [`forumTopicInfo$Input`](forumTopicInfo$Input-1.md)

Basic information about the topic

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the topic is pinned in the topic list

### last\_message?

> `readonly` `optional` **last\_message**: [`message$Input`](message$Input-1.md) \| `null`

Last message in the topic; may be null if unknown

### last\_read\_inbox\_message\_id?

> `readonly` `optional` **last\_read\_inbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read incoming message

### last\_read\_outbox\_message\_id?

> `readonly` `optional` **last\_read\_outbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read outgoing message

### notification\_settings?

> `readonly` `optional` **notification\_settings**: [`chatNotificationSettings$Input`](chatNotificationSettings$Input-1.md)

Notification settings for the topic

### unread\_count?

> `readonly` `optional` **unread\_count**: [`int32`](int32-1.md)

Number of unread messages in the topic

### unread\_mention\_count?

> `readonly` `optional` **unread\_mention\_count**: [`int32`](int32-1.md)

Number of unread messages with a mention/reply in the topic

### unread\_reaction\_count?

> `readonly` `optional` **unread\_reaction\_count**: [`int32`](int32-1.md)

Number of messages with unread reactions in the topic

## Defined in

dist/generated/types.d.ts:18465
