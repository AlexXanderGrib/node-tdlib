[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallParticipant

# Type Alias: groupCallParticipant

> **groupCallParticipant**: `object`

Represents a group call participant

## Type declaration

### \_

> **\_**: `"groupCallParticipant"`

### audio\_source\_id

> **audio\_source\_id**: [`int32`](int32-1.md)

User's audio channel synchronization source identifier

### bio

> **bio**: `string`

The participant user's bio or the participant chat's description

### can\_be\_muted\_for\_all\_users

> **can\_be\_muted\_for\_all\_users**: [`Bool`](Bool.md)

True, if the current user can mute the participant for all other group call participants

### can\_be\_muted\_for\_current\_user

> **can\_be\_muted\_for\_current\_user**: [`Bool`](Bool.md)

True, if the current user can mute the participant only for self

### can\_be\_unmuted\_for\_all\_users

> **can\_be\_unmuted\_for\_all\_users**: [`Bool`](Bool.md)

True, if the current user can allow the participant to unmute themselves or unmute the participant (if the participant is the current user)

### can\_be\_unmuted\_for\_current\_user

> **can\_be\_unmuted\_for\_current\_user**: [`Bool`](Bool.md)

True, if the current user can unmute the participant for self

### can\_unmute\_self

> **can\_unmute\_self**: [`Bool`](Bool.md)

True, if the participant is muted for all users, but can unmute themselves

### is\_current\_user

> **is\_current\_user**: [`Bool`](Bool.md)

True, if the participant is the current user

### is\_hand\_raised

> **is\_hand\_raised**: [`Bool`](Bool.md)

True, if the participant hand is raised

### is\_muted\_for\_all\_users

> **is\_muted\_for\_all\_users**: [`Bool`](Bool.md)

True, if the participant is muted for all users

### is\_muted\_for\_current\_user

> **is\_muted\_for\_current\_user**: [`Bool`](Bool.md)

True, if the participant is muted for the current user

### is\_speaking

> **is\_speaking**: [`Bool`](Bool.md)

True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking

### order

> **order**: `string`

User's order in the group call participant list. Orders must be compared lexicographically. The bigger is order, the higher is user in the list. If order is empty, the user must be removed from the participant list

### participant\_id

> **participant\_id**: [`MessageSender`](MessageSender.md)

Identifier of the group call participant

### screen\_sharing\_audio\_source\_id

> **screen\_sharing\_audio\_source\_id**: [`int32`](int32-1.md)

User's screen sharing audio channel synchronization source identifier

### screen\_sharing\_video\_info

> **screen\_sharing\_video\_info**: [`groupCallParticipantVideoInfo`](groupCallParticipantVideoInfo-1.md) \| `null`

Information about user's screen sharing video channel; may be null if there is no active screen sharing video

### video\_info

> **video\_info**: [`groupCallParticipantVideoInfo`](groupCallParticipantVideoInfo-1.md) \| `null`

Information about user's video channel; may be null if there is no active video

### volume\_level

> **volume\_level**: [`int32`](int32-1.md)

Participant's volume level; 1-20000 in hundreds of percents

## Defined in

dist/generated/types.d.ts:35537
