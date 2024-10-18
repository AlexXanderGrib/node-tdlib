[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatPendingJoinRequests$Input

# Type Alias: updateChatPendingJoinRequests$Input

> **updateChatPendingJoinRequests$Input**: `object`

Version of [updateChatPendingJoinRequests](updateChatPendingJoinRequests.md) for method parameters.

The chat pending join requests were changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatPendingJoinRequests"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### pending\_join\_requests?

> `readonly` `optional` **pending\_join\_requests**: [`chatJoinRequestsInfo$Input`](chatJoinRequestsInfo$Input.md) \| `null`

The new data about pending join requests; may be null

## Defined in

dist/generated/types.d.ts:55521
