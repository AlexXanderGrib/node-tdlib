[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCall

# Type Alias: groupCall

> **groupCall**: `object`

Describes a group call

## Type declaration

### \_

> **\_**: `"groupCall"`

### can\_be\_managed

> **can\_be\_managed**: [`Bool`](Bool.md)

True, if the current user can manage the group call

### can\_enable\_video

> **can\_enable\_video**: [`Bool`](Bool.md)

True, if the current user can broadcast video or share screen

### can\_toggle\_mute\_new\_participants

> **can\_toggle\_mute\_new\_participants**: [`Bool`](Bool.md)

True, if the current user can enable or disable mute_new_participants setting

### duration

> **duration**: [`int32`](int32-1.md)

Call duration, in seconds; for ended calls only

### enabled\_start\_notification

> **enabled\_start\_notification**: [`Bool`](Bool.md)

True, if the group call is scheduled and the current user will receive a notification when the group call starts

### has\_hidden\_listeners

> **has\_hidden\_listeners**: [`Bool`](Bool.md)

True, if group call participants, which are muted, aren't returned in participant list

### id

> **id**: [`int32`](int32-1.md)

Group call identifier

### is\_active

> **is\_active**: [`Bool`](Bool.md)

True, if the call is active

### is\_joined

> **is\_joined**: [`Bool`](Bool.md)

True, if the call is joined

### is\_my\_video\_enabled

> **is\_my\_video\_enabled**: [`Bool`](Bool.md)

True, if the current user's video is enabled

### is\_my\_video\_paused

> **is\_my\_video\_paused**: [`Bool`](Bool.md)

True, if the current user's video is paused

### is\_rtmp\_stream

> **is\_rtmp\_stream**: [`Bool`](Bool.md)

True, if the chat is an RTMP stream instead of an ordinary video chat

### is\_video\_recorded

> **is\_video\_recorded**: [`Bool`](Bool.md)

True, if a video file is being recorded for the call

### loaded\_all\_participants

> **loaded\_all\_participants**: [`Bool`](Bool.md)

True, if all group call participants are loaded

### mute\_new\_participants

> **mute\_new\_participants**: [`Bool`](Bool.md)

True, if only group call administrators can unmute new participants

### need\_rejoin

> **need\_rejoin**: [`Bool`](Bool.md)

True, if user was kicked from the call because of network loss and the call needs to be rejoined

### participant\_count

> **participant\_count**: [`int32`](int32-1.md)

Number of participants in the group call

### recent\_speakers

> **recent\_speakers**: [`vector`](vector.md)\<[`groupCallRecentSpeaker`](groupCallRecentSpeaker-1.md)\>

At most 3 recently speaking users in the group call

### record\_duration

> **record\_duration**: [`int32`](int32-1.md)

Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall update is not triggered when value of this field changes, but the same recording goes on

### scheduled\_start\_date

> **scheduled\_start\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 if it is already active or was ended

### title

> **title**: `string`

Group call title

## Defined in

dist/generated/types.d.ts:35235
