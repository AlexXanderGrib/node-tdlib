[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forumTopicInfo$Input

# Type Alias: forumTopicInfo$Input

> **forumTopicInfo$Input**: `object`

Version of [forumTopicInfo](forumTopicInfo-1.md) for method parameters.

Contains basic information about a forum topic

## Type declaration

### \_

> `readonly` **\_**: `"forumTopicInfo"`

### creation\_date?

> `readonly` `optional` **creation\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the topic was created

### creator\_id?

> `readonly` `optional` **creator\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the creator of the topic

### icon?

> `readonly` `optional` **icon**: [`forumTopicIcon$Input`](forumTopicIcon$Input-1.md)

Icon of the topic

### is\_closed?

> `readonly` `optional` **is\_closed**: [`Bool$Input`](Bool$Input.md)

True, if the topic is closed

### is\_general?

> `readonly` `optional` **is\_general**: [`Bool$Input`](Bool$Input.md)

True, if the topic is the General topic list

### is\_hidden?

> `readonly` `optional` **is\_hidden**: [`Bool$Input`](Bool$Input.md)

True, if the topic is hidden above the topic list and closed; for General topic only

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the topic was created by the current user

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

Message thread identifier of the topic

### name?

> `readonly` `optional` **name**: `string`

Name of the topic

## Defined in

dist/generated/types.d.ts:18356
