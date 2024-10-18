[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / savedMessagesTopic$Input

# Type Alias: savedMessagesTopic$Input

> **savedMessagesTopic$Input**: `object`

Version of [savedMessagesTopic](savedMessagesTopic.md) for method parameters.

Contains information about a Saved Messages topic

## Type declaration

### \_

> `readonly` **\_**: `"savedMessagesTopic"`

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input.md) \| `null`

A draft of a message in the topic; may be null if none

### id?

> `readonly` `optional` **id**: [`int53`](int53.md)

Unique topic identifier

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the topic is pinned

### last\_message?

> `readonly` `optional` **last\_message**: [`message$Input`](message$Input.md) \| `null`

Last message in the topic; may be null if none or unknown

### order?

> `readonly` `optional` **order**: [`int64$Input`](int64$Input.md)

A parameter used to determine order of the topic in the topic list. Topics must be sorted by the order in descending order

### type?

> `readonly` `optional` **type**: [`SavedMessagesTopicType$Input`](SavedMessagesTopicType$Input.md)

Type of the topic

## Defined in

dist/generated/types.d.ts:18859
