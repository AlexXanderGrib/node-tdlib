[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageVideoChatScheduled$Input

# Type Alias: messageVideoChatScheduled$Input

> **messageVideoChatScheduled$Input**: `object`

Version of [messageVideoChatScheduled](messageVideoChatScheduled.md) for method parameters.

A new video chat was scheduled

## Type declaration

### \_

> `readonly` **\_**: `"messageVideoChatScheduled"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Identifier of the video chat. The video chat can be received through the method getGroupCall

### start\_date?

> `readonly` `optional` **start\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the group call is supposed to be started by an administrator

## Defined in

dist/generated/types.d.ts:26767
