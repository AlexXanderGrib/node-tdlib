[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setGroupCallParticipantIsSpeaking$Input

# Type Alias: setGroupCallParticipantIsSpeaking$Input

> **setGroupCallParticipantIsSpeaking$Input**: `object`

Informs TDLib that speaking state of a participant of an active group has changed

## Type declaration

### \_

> `readonly` **\_**: `"setGroupCallParticipantIsSpeaking"`

### audio\_source?

> `readonly` `optional` **audio\_source**: [`int32`](int32-1.md)

Group call participant's synchronization audio source identifier, or 0 for the current user

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### is\_speaking?

> `readonly` `optional` **is\_speaking**: [`Bool$Input`](Bool$Input.md)

Pass true if the user is speaking

## Defined in

dist/generated/types.d.ts:91527
