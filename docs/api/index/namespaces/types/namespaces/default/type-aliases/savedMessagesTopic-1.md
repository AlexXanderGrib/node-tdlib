[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / savedMessagesTopic

# Type Alias: savedMessagesTopic

> **savedMessagesTopic**: `object`

Contains information about a Saved Messages topic

## Type declaration

### \_

> **\_**: `"savedMessagesTopic"`

### draft\_message

> **draft\_message**: [`draftMessage`](draftMessage-1.md) \| `null`

A draft of a message in the topic; may be null if none

### id

> **id**: [`int53`](int53-1.md)

Unique topic identifier

### is\_pinned

> **is\_pinned**: [`Bool`](Bool.md)

True, if the topic is pinned

### last\_message

> **last\_message**: [`message`](message-1.md) \| `null`

Last message in the topic; may be null if none or unknown

### order

> **order**: [`int64`](int64-1.md)

A parameter used to determine order of the topic in the topic list. Topics must be sorted by the order in descending order

### type

> **type**: [`SavedMessagesTopicType`](SavedMessagesTopicType.md)

Type of the topic

## Defined in

dist/generated/types.d.ts:18195
