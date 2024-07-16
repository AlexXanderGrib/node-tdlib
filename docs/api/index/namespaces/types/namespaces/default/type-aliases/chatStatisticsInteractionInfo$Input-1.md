[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsInteractionInfo$Input

# Type Alias: chatStatisticsInteractionInfo$Input

> **chatStatisticsInteractionInfo$Input**: `object`

Version of [chatStatisticsInteractionInfo](chatStatisticsInteractionInfo-1.md) for method parameters.

Contains statistics about interactions with a message sent in the chat or a story sent by the chat

## Type declaration

### \_

> `readonly` **\_**: `"chatStatisticsInteractionInfo"`

### forward\_count?

> `readonly` `optional` **forward\_count**: [`int32`](int32-1.md)

Number of times the object was forwarded

### object\_type?

> `readonly` `optional` **object\_type**: [`ChatStatisticsObjectType$Input`](ChatStatisticsObjectType$Input.md)

Type of the object

### reaction\_count?

> `readonly` `optional` **reaction\_count**: [`int32`](int32-1.md)

Number of times reactions were added to the object

### view\_count?

> `readonly` `optional` **view\_count**: [`int32`](int32-1.md)

Number of times the object was viewed

## Defined in

dist/generated/types.d.ts:51237
