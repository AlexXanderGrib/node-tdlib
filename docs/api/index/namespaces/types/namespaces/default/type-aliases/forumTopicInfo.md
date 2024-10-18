[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forumTopicInfo

# Type Alias: forumTopicInfo

> **forumTopicInfo**: `object`

Contains basic information about a forum topic

## Type declaration

### \_

> **\_**: `"forumTopicInfo"`

### creation\_date

> **creation\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the topic was created

### creator\_id

> **creator\_id**: [`MessageSender`](MessageSender.md)

Identifier of the creator of the topic

### icon

> **icon**: [`forumTopicIcon`](forumTopicIcon.md)

Icon of the topic

### is\_closed

> **is\_closed**: [`Bool`](Bool.md)

True, if the topic is closed

### is\_general

> **is\_general**: [`Bool`](Bool.md)

True, if the topic is the General topic list

### is\_hidden

> **is\_hidden**: [`Bool`](Bool.md)

True, if the topic is hidden above the topic list and closed; for General topic only

### is\_outgoing

> **is\_outgoing**: [`Bool`](Bool.md)

True, if the topic was created by the current user

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier of the topic

### name

> **name**: `string`

Name of the topic

## Defined in

dist/generated/types.d.ts:18929
