[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageCalendar$Input

# Type Alias: messageCalendar$Input

> **messageCalendar$Input**: `object`

Version of [messageCalendar](messageCalendar-1.md) for method parameters.

Contains information about found messages, split by days according to the option "utc_time_offset"

## Type declaration

### \_

> `readonly` **\_**: `"messageCalendar"`

### days?

> `readonly` `optional` **days**: [`vector$Input`](vector$Input.md)\<[`messageCalendarDay$Input`](messageCalendarDay$Input-1.md)\>

Information about messages sent

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32-1.md)

Total number of found messages

## Defined in

dist/generated/types.d.ts:14137
