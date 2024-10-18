[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateGroupCallParticipant$Input

# Type Alias: updateGroupCallParticipant$Input

> **updateGroupCallParticipant$Input**: `object`

Version of [updateGroupCallParticipant](updateGroupCallParticipant.md) for method parameters.

Information about a group call participant was changed. The updates are sent only after the group call is received through getGroupCall and only if the call is joined or being joined

## Type declaration

### \_

> `readonly` **\_**: `"updateGroupCallParticipant"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Identifier of group call

### participant?

> `readonly` `optional` **participant**: [`groupCallParticipant$Input`](groupCallParticipant$Input.md)

New data about a participant

## Defined in

dist/generated/types.d.ts:57253
