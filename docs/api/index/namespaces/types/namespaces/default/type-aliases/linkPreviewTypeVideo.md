[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeVideo

# Type Alias: linkPreviewTypeVideo

> **linkPreviewTypeVideo**: `object`

The link is a link to a video

## Type declaration

### \_

> **\_**: `"linkPreviewTypeVideo"`

### author

> **author**: `string`

Author of the video

### duration

> **duration**: [`int32`](int32.md)

Duration of the video, in seconds; 0 if unknown

### height

> **height**: [`int32`](int32.md)

Expected height of the preview

### mime\_type

> **mime\_type**: `string`

MIME type of the video file

### url

> **url**: `string`

URL of the video; may be empty if none

### video

> **video**: [`video`](video.md) \| `null`

The video description; may be null if unknown

### width

> **width**: [`int32`](int32.md)

Expected width of the preview

## Defined in

dist/generated/types.d.ts:22309
