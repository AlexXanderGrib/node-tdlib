[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleGroupCallMuteNewParticipants$Input

# Type Alias: toggleGroupCallMuteNewParticipants$Input

> **toggleGroupCallMuteNewParticipants$Input**: `object`

Toggles whether new participants of a group call can be unmuted only by administrators of the group call. Requires groupCall.can_toggle_mute_new_participants group call flag

## Type declaration

### \_

> `readonly` **\_**: `"toggleGroupCallMuteNewParticipants"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

### mute\_new\_participants?

> `readonly` `optional` **mute\_new\_participants**: [`Bool$Input`](Bool$Input.md)

New value of the mute_new_participants setting

## Defined in

dist/generated/types.d.ts:93720
