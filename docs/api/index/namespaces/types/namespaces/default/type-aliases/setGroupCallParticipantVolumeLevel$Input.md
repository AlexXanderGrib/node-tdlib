[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setGroupCallParticipantVolumeLevel$Input

# Type Alias: setGroupCallParticipantVolumeLevel$Input

> **setGroupCallParticipantVolumeLevel$Input**: `object`

Changes volume level of a participant of an active group call. If the current user can manage the group call, then the participant's volume level will be changed for all users with the default volume level

## Type declaration

### \_

> `readonly` **\_**: `"setGroupCallParticipantVolumeLevel"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Participant identifier

### volume\_level?

> `readonly` `optional` **volume\_level**: [`int32`](int32-1.md)

New participant's volume level; 1-20000 in hundreds of percents

## Defined in

dist/generated/types.d.ts:91623
