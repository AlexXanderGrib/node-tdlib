[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventVideoChatParticipantVolumeLevelChanged$Input

# Type Alias: chatEventVideoChatParticipantVolumeLevelChanged$Input

> **chatEventVideoChatParticipantVolumeLevelChanged$Input**: `object`

Version of [chatEventVideoChatParticipantVolumeLevelChanged](chatEventVideoChatParticipantVolumeLevelChanged.md) for method parameters.

A video chat participant volume level was changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventVideoChatParticipantVolumeLevelChanged"`

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the affected group call participant

### volume\_level?

> `readonly` `optional` **volume\_level**: [`int32`](int32.md)

New value of volume_level; 1-20000 in hundreds of percents

## Defined in

dist/generated/types.d.ts:41885
