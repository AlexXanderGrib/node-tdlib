[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatMessageCalendar

# Type Alias: getChatMessageCalendar()

> **getChatMessageCalendar**: (`parameters`) => [`MessageCalendar`](MessageCalendar-1.md)

Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the value of the option "utc_time_offset"

## Parameters

• **parameters**: [`getChatMessageCalendar$Input`](getChatMessageCalendar$Input.md)

[getChatMessageCalendar$Input](getChatMessageCalendar$Input.md)

## Returns

[`MessageCalendar`](MessageCalendar-1.md)

[MessageCalendar](MessageCalendar-1.md)

## Defined in

dist/generated/types.d.ts:79319
