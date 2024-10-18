[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forumTopic

# Type Alias: forumTopic

> **forumTopic**: `object`

Describes a forum topic

## Type declaration

### \_

> **\_**: `"forumTopic"`

### draft\_message

> **draft\_message**: [`draftMessage`](draftMessage.md) \| `null`

A draft of a message in the topic; may be null if none

### info

> **info**: [`forumTopicInfo`](forumTopicInfo.md)

Basic information about the topic

### is\_pinned

> **is\_pinned**: [`Bool`](Bool.md)

True, if the topic is pinned in the topic list

### last\_message

> **last\_message**: [`message`](message.md) \| `null`

Last message in the topic; may be null if unknown

### last\_read\_inbox\_message\_id

> **last\_read\_inbox\_message\_id**: [`int53`](int53.md)

Identifier of the last read incoming message

### last\_read\_outbox\_message\_id

> **last\_read\_outbox\_message\_id**: [`int53`](int53.md)

Identifier of the last read outgoing message

### notification\_settings

> **notification\_settings**: [`chatNotificationSettings`](chatNotificationSettings.md)

Notification settings for the topic

### unread\_count

> **unread\_count**: [`int32`](int32.md)

Number of unread messages in the topic

### unread\_mention\_count

> **unread\_mention\_count**: [`int32`](int32.md)

Number of unread messages with a mention/reply in the topic

### unread\_reaction\_count

> **unread\_reaction\_count**: [`int32`](int32.md)

Number of messages with unread reactions in the topic

## Defined in

dist/generated/types.d.ts:19033
