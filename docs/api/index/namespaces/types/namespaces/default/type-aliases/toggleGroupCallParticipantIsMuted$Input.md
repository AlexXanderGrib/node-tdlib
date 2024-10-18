[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleGroupCallParticipantIsMuted$Input

# Type Alias: toggleGroupCallParticipantIsMuted$Input

> **toggleGroupCallParticipantIsMuted$Input**: `object`

Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves

## Type declaration

### \_

> `readonly` **\_**: `"toggleGroupCallParticipantIsMuted"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

### is\_muted?

> `readonly` `optional` **is\_muted**: [`Bool$Input`](Bool$Input.md)

Pass true to mute the user; pass false to unmute them

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Participant identifier

## Defined in

dist/generated/types.d.ts:94072
