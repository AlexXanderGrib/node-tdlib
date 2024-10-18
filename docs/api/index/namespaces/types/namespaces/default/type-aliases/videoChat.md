[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / videoChat

# Type Alias: videoChat

> **videoChat**: `object`

Describes a video chat

## Type declaration

### \_

> **\_**: `"videoChat"`

### default\_participant\_id

> **default\_participant\_id**: [`MessageSender`](MessageSender.md) \| `null`

Default group call participant identifier to join the video chat; may be null

### group\_call\_id

> **group\_call\_id**: [`int32`](int32.md)

Group call identifier of an active video chat; 0 if none. Full information about the video chat can be received through the method getGroupCall

### has\_participants

> **has\_participants**: [`Bool`](Bool.md)

True, if the video chat has participants

## Defined in

dist/generated/types.d.ts:16835
