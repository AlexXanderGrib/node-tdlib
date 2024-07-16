[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleGroupCallParticipantIsHandRaised$Input

# Type Alias: toggleGroupCallParticipantIsHandRaised$Input

> **toggleGroupCallParticipantIsHandRaised$Input**: `object`

Toggles whether a group call participant hand is rased

## Type declaration

### \_

> `readonly` **\_**: `"toggleGroupCallParticipantIsHandRaised"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### is\_hand\_raised?

> `readonly` `optional` **is\_hand\_raised**: [`Bool$Input`](Bool$Input.md)

Pass true if the user's hand needs to be raised. Only self hand can be raised. Requires groupCall.can_be_managed group call flag to lower other's hand

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Participant identifier

## Defined in

dist/generated/types.d.ts:91671
