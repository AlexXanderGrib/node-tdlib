[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallParticipant$Input

# Type Alias: groupCallParticipant$Input

> **groupCallParticipant$Input**: `object`

Version of [groupCallParticipant](groupCallParticipant-1.md) for method parameters.

Represents a group call participant

## Type declaration

### \_

> `readonly` **\_**: `"groupCallParticipant"`

### audio\_source\_id?

> `readonly` `optional` **audio\_source\_id**: [`int32`](int32-1.md)

User's audio channel synchronization source identifier

### bio?

> `readonly` `optional` **bio**: `string`

The participant user's bio or the participant chat's description

### can\_be\_muted\_for\_all\_users?

> `readonly` `optional` **can\_be\_muted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the current user can mute the participant for all other group call participants

### can\_be\_muted\_for\_current\_user?

> `readonly` `optional` **can\_be\_muted\_for\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the current user can mute the participant only for self

### can\_be\_unmuted\_for\_all\_users?

> `readonly` `optional` **can\_be\_unmuted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the current user can allow the participant to unmute themselves or unmute the participant (if the participant is the current user)

### can\_be\_unmuted\_for\_current\_user?

> `readonly` `optional` **can\_be\_unmuted\_for\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the current user can unmute the participant for self

### can\_unmute\_self?

> `readonly` `optional` **can\_unmute\_self**: [`Bool$Input`](Bool$Input.md)

True, if the participant is muted for all users, but can unmute themselves

### is\_current\_user?

> `readonly` `optional` **is\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the participant is the current user

### is\_hand\_raised?

> `readonly` `optional` **is\_hand\_raised**: [`Bool$Input`](Bool$Input.md)

True, if the participant hand is raised

### is\_muted\_for\_all\_users?

> `readonly` `optional` **is\_muted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the participant is muted for all users

### is\_muted\_for\_current\_user?

> `readonly` `optional` **is\_muted\_for\_current\_user**: [`Bool$Input`](Bool$Input.md)

True, if the participant is muted for the current user

### is\_speaking?

> `readonly` `optional` **is\_speaking**: [`Bool$Input`](Bool$Input.md)

True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking

### order?

> `readonly` `optional` **order**: `string`

User's order in the group call participant list. Orders must be compared lexicographically. The bigger is order, the higher is user in the list. If order is empty, the user must be removed from the participant list

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the group call participant

### screen\_sharing\_audio\_source\_id?

> `readonly` `optional` **screen\_sharing\_audio\_source\_id**: [`int32`](int32-1.md)

User's screen sharing audio channel synchronization source identifier

### screen\_sharing\_video\_info?

> `readonly` `optional` **screen\_sharing\_video\_info**: [`groupCallParticipantVideoInfo$Input`](groupCallParticipantVideoInfo$Input-1.md) \| `null`

Information about user's screen sharing video channel; may be null if there is no active screen sharing video

### video\_info?

> `readonly` `optional` **video\_info**: [`groupCallParticipantVideoInfo$Input`](groupCallParticipantVideoInfo$Input-1.md) \| `null`

Information about user's video channel; may be null if there is no active video

### volume\_level?

> `readonly` `optional` **volume\_level**: [`int32`](int32-1.md)

Participant's volume level; 1-20000 in hundreds of percents

## Defined in

dist/generated/types.d.ts:35635
