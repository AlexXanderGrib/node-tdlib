[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCall$Input

# Type Alias: groupCall$Input

> **groupCall$Input**: `object`

Version of [groupCall](groupCall-1.md) for method parameters.

Describes a group call

## Type declaration

### \_

> `readonly` **\_**: `"groupCall"`

### can\_be\_managed?

> `readonly` `optional` **can\_be\_managed**: [`Bool$Input`](Bool$Input.md)

True, if the current user can manage the group call

### can\_enable\_video?

> `readonly` `optional` **can\_enable\_video**: [`Bool$Input`](Bool$Input.md)

True, if the current user can broadcast video or share screen

### can\_toggle\_mute\_new\_participants?

> `readonly` `optional` **can\_toggle\_mute\_new\_participants**: [`Bool$Input`](Bool$Input.md)

True, if the current user can enable or disable mute_new_participants setting

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Call duration, in seconds; for ended calls only

### enabled\_start\_notification?

> `readonly` `optional` **enabled\_start\_notification**: [`Bool$Input`](Bool$Input.md)

True, if the group call is scheduled and the current user will receive a notification when the group call starts

### has\_hidden\_listeners?

> `readonly` `optional` **has\_hidden\_listeners**: [`Bool$Input`](Bool$Input.md)

True, if group call participants, which are muted, aren't returned in participant list

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Group call identifier

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

True, if the call is active

### is\_joined?

> `readonly` `optional` **is\_joined**: [`Bool$Input`](Bool$Input.md)

True, if the call is joined

### is\_my\_video\_enabled?

> `readonly` `optional` **is\_my\_video\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if the current user's video is enabled

### is\_my\_video\_paused?

> `readonly` `optional` **is\_my\_video\_paused**: [`Bool$Input`](Bool$Input.md)

True, if the current user's video is paused

### is\_rtmp\_stream?

> `readonly` `optional` **is\_rtmp\_stream**: [`Bool$Input`](Bool$Input.md)

True, if the chat is an RTMP stream instead of an ordinary video chat

### is\_video\_recorded?

> `readonly` `optional` **is\_video\_recorded**: [`Bool$Input`](Bool$Input.md)

True, if a video file is being recorded for the call

### loaded\_all\_participants?

> `readonly` `optional` **loaded\_all\_participants**: [`Bool$Input`](Bool$Input.md)

True, if all group call participants are loaded

### mute\_new\_participants?

> `readonly` `optional` **mute\_new\_participants**: [`Bool$Input`](Bool$Input.md)

True, if only group call administrators can unmute new participants

### need\_rejoin?

> `readonly` `optional` **need\_rejoin**: [`Bool$Input`](Bool$Input.md)

True, if user was kicked from the call because of network loss and the call needs to be rejoined

### participant\_count?

> `readonly` `optional` **participant\_count**: [`int32`](int32-1.md)

Number of participants in the group call

### recent\_speakers?

> `readonly` `optional` **recent\_speakers**: [`vector$Input`](vector$Input.md)\<[`groupCallRecentSpeaker$Input`](groupCallRecentSpeaker$Input-1.md)\>

At most 3 recently speaking users in the group call

### record\_duration?

> `readonly` `optional` **record\_duration**: [`int32`](int32-1.md)

Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall update is not triggered when value of this field changes, but the same recording goes on

### scheduled\_start\_date?

> `readonly` `optional` **scheduled\_start\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 if it is already active or was ended

### title?

> `readonly` `optional` **title**: `string`

Group call title

## Defined in

dist/generated/types.d.ts:35348
