[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatJoinRequestsInfo$Input

# Type Alias: chatJoinRequestsInfo$Input

> **chatJoinRequestsInfo$Input**: `object`

Version of [chatJoinRequestsInfo](chatJoinRequestsInfo-1.md) for method parameters.

Contains information about pending join requests for a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatJoinRequestsInfo"`

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Total number of pending join requests

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of at most 3 users sent the newest pending join requests

## Defined in

dist/generated/types.d.ts:11083
