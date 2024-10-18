[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSpeechRecognitionTrial

# Type Alias: updateSpeechRecognitionTrial

> **updateSpeechRecognitionTrial**: `object`

The parameters of speech recognition without Telegram Premium subscription has changed

## Type declaration

### \_

> **\_**: `"updateSpeechRecognitionTrial"`

### left\_count

> **left\_count**: [`int32`](int32.md)

Number of left speech recognition attempts this week

### max\_media\_duration

> **max\_media\_duration**: [`int32`](int32.md)

The maximum allowed duration of media for speech recognition without Telegram Premium subscription, in seconds

### next\_reset\_date

> **next\_reset\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the weekly number of tries will reset; 0 if unknown

### weekly\_count

> **weekly\_count**: [`int32`](int32.md)

The total number of allowed speech recognitions per week; 0 if none

## Defined in

dist/generated/types.d.ts:58475
