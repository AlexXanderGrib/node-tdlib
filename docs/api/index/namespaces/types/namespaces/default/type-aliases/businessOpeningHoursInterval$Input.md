[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessOpeningHoursInterval$Input

# Type Alias: businessOpeningHoursInterval$Input

> **businessOpeningHoursInterval$Input**: `object`

Version of [businessOpeningHoursInterval](businessOpeningHoursInterval.md) for method parameters.

Describes an interval of time when the business is open

## Type declaration

### \_

> `readonly` **\_**: `"businessOpeningHoursInterval"`

### end\_minute?

> `readonly` `optional` **end\_minute**: [`int32`](int32.md)

The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 1-8*24*60

### start\_minute?

> `readonly` `optional` **start\_minute**: [`int32`](int32.md)

The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0-7*24*60

## Defined in

dist/generated/types.d.ts:6997
