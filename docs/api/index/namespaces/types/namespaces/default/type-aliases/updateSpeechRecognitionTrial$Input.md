[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSpeechRecognitionTrial$Input

# Type Alias: updateSpeechRecognitionTrial$Input

> **updateSpeechRecognitionTrial$Input**: `object`

Version of [updateSpeechRecognitionTrial](updateSpeechRecognitionTrial.md) for method parameters.

The parameters of speech recognition without Telegram Premium subscription has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateSpeechRecognitionTrial"`

### left\_count?

> `readonly` `optional` **left\_count**: [`int32`](int32.md)

Number of left speech recognition attempts this week

### max\_media\_duration?

> `readonly` `optional` **max\_media\_duration**: [`int32`](int32.md)

The maximum allowed duration of media for speech recognition without Telegram Premium subscription, in seconds

### next\_reset\_date?

> `readonly` `optional` **next\_reset\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the weekly number of tries will reset; 0 if unknown

### weekly\_count?

> `readonly` `optional` **weekly\_count**: [`int32`](int32.md)

The total number of allowed speech recognitions per week; 0 if none

## Defined in

dist/generated/types.d.ts:58503
