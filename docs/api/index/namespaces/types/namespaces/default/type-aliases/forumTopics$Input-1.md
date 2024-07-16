[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forumTopics$Input

# Type Alias: forumTopics$Input

> **forumTopics$Input**: `object`

Version of [forumTopics](forumTopics-1.md) for method parameters.

Describes a list of forum topics

## Type declaration

### \_

> `readonly` **\_**: `"forumTopics"`

### next\_offset\_date?

> `readonly` `optional` **next\_offset\_date**: [`int32`](int32-1.md)

Offset date for the next getForumTopics request

### next\_offset\_message\_id?

> `readonly` `optional` **next\_offset\_message\_id**: [`int53`](int53-1.md)

Offset message identifier for the next getForumTopics request

### next\_offset\_message\_thread\_id?

> `readonly` `optional` **next\_offset\_message\_thread\_id**: [`int53`](int53-1.md)

Offset message thread identifier for the next getForumTopics request

### topics?

> `readonly` `optional` **topics**: [`vector$Input`](vector$Input.md)\<[`forumTopic$Input`](forumTopic$Input-1.md)\>

List of forum topics

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Approximate total number of forum topics found

## Defined in

dist/generated/types.d.ts:18554
