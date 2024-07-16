[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessOpeningHoursInterval

# Type Alias: businessOpeningHoursInterval

> **businessOpeningHoursInterval**: `object`

Describes an interval of time when the business is open

## Type declaration

### \_

> **\_**: `"businessOpeningHoursInterval"`

### end\_minute

> **end\_minute**: [`int32`](int32-1.md)

The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 1-8*24*60

### start\_minute

> **start\_minute**: [`int32`](int32-1.md)

The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0-7*24*60

## Defined in

dist/generated/types.d.ts:6913
