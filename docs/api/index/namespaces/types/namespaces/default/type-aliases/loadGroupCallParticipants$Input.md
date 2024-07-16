[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadGroupCallParticipants$Input

# Type Alias: loadGroupCallParticipants$Input

> **loadGroupCallParticipants$Input**: `object`

Loads more participants of a group call. The loaded participants will be received through updates. Use the field groupCall.loaded_all_participants to check whether all participants have already been loaded

## Type declaration

### \_

> `readonly` **\_**: `"loadGroupCallParticipants"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier. The group call must be previously received through getGroupCall and must be joined or being joined

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of participants to load; up to 100

## Defined in

dist/generated/types.d.ts:91719
