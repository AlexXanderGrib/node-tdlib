[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / startGroupCallScreenSharing$Input

# Type Alias: startGroupCallScreenSharing$Input

> **startGroupCallScreenSharing$Input**: `object`

Starts screen sharing in a joined group call. Returns join response payload for tgcalls

## Type declaration

### \_

> `readonly` **\_**: `"startGroupCallScreenSharing"`

### audio\_source\_id?

> `readonly` `optional` **audio\_source\_id**: [`int32`](int32.md)

Screen sharing audio channel synchronization source identifier; received from tgcalls

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

### payload?

> `readonly` `optional` **payload**: `string`

Group call join payload; received from tgcalls

## Defined in

dist/generated/types.d.ts:93568
