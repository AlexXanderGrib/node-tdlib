[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessAwayMessageScheduleCustom$Input

# Type Alias: businessAwayMessageScheduleCustom$Input

> **businessAwayMessageScheduleCustom$Input**: `object`

Version of [businessAwayMessageScheduleCustom](businessAwayMessageScheduleCustom.md) for method parameters.

Send away messages only in the specified time span

## Type declaration

### \_

> `readonly` **\_**: `"businessAwayMessageScheduleCustom"`

### end\_date?

> `readonly` `optional` **end\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the away messages will stop to be sent

### start\_date?

> `readonly` `optional` **start\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the away messages will start to be sent

## Defined in

dist/generated/types.d.ts:6549
