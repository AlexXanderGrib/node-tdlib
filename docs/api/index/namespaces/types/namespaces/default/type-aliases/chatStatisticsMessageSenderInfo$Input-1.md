[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsMessageSenderInfo$Input

# Type Alias: chatStatisticsMessageSenderInfo$Input

> **chatStatisticsMessageSenderInfo$Input**: `object`

Version of [chatStatisticsMessageSenderInfo](chatStatisticsMessageSenderInfo-1.md) for method parameters.

Contains statistics about messages sent by a user

## Type declaration

### \_

> `readonly` **\_**: `"chatStatisticsMessageSenderInfo"`

### average\_character\_count?

> `readonly` `optional` **average\_character\_count**: [`int32`](int32-1.md)

Average number of characters in sent messages; 0 if unknown

### sent\_message\_count?

> `readonly` `optional` **sent\_message\_count**: [`int32`](int32-1.md)

Number of sent messages

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

## Defined in

dist/generated/types.d.ts:51286
