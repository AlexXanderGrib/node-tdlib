[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / videoChat$Input

# Type Alias: videoChat$Input

> **videoChat$Input**: `object`

Version of [videoChat](videoChat.md) for method parameters.

Describes a video chat

## Type declaration

### \_

> `readonly` **\_**: `"videoChat"`

### default\_participant\_id?

> `readonly` `optional` **default\_participant\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Default group call participant identifier to join the video chat; may be null

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier of an active video chat; 0 if none. Full information about the video chat can be received through the method getGroupCall

### has\_participants?

> `readonly` `optional` **has\_participants**: [`Bool$Input`](Bool$Input.md)

True, if the video chat has participants

## Defined in

dist/generated/types.d.ts:16858
