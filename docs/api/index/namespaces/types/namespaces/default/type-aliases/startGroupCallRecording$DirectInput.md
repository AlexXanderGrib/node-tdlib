[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / startGroupCallRecording$DirectInput

# Type Alias: startGroupCallRecording$DirectInput

> **startGroupCallRecording$DirectInput**: `object`

Starts recording of an active group call. Requires groupCall.can_be_managed group call flag

## Type declaration

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### record\_video?

> `readonly` `optional` **record\_video**: [`Bool$Input`](Bool$Input.md)

Pass true to record a video file instead of an audio file

### title?

> `readonly` `optional` **title**: `string`

Group call recording title; 0-64 characters

### use\_portrait\_orientation?

> `readonly` `optional` **use\_portrait\_orientation**: [`Bool$Input`](Bool$Input.md)

Pass true to use portrait orientation for video instead of landscape one

## Defined in

dist/generated/types.d.ts:91391
