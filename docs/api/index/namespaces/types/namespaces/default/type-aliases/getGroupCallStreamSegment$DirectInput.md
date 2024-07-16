[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getGroupCallStreamSegment$DirectInput

# Type Alias: getGroupCallStreamSegment$DirectInput

> **getGroupCallStreamSegment$DirectInput**: `object`

Returns a file with a segment of a group call stream in a modified OGG format for audio or MPEG-4 format for video

## Type declaration

### channel\_id?

> `readonly` `optional` **channel\_id**: [`int32`](int32-1.md)

Identifier of an audio/video channel to get as received from tgcalls

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### scale?

> `readonly` `optional` **scale**: [`int32`](int32-1.md)

Segment duration scale; 0-1. Segment's duration is 1000/(2**scale) milliseconds

### time\_offset?

> `readonly` `optional` **time\_offset**: [`int53`](int53-1.md)

Point in time when the stream segment begins; Unix timestamp in milliseconds

### video\_quality?

> `readonly` `optional` **video\_quality**: [`GroupCallVideoQuality$Input`](GroupCallVideoQuality$Input.md) \| `null`

Video quality as received from tgcalls; pass null to get the worst available quality

## Defined in

dist/generated/types.d.ts:91872
