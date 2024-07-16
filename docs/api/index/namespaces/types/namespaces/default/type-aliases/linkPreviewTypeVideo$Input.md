[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeVideo$Input

# Type Alias: linkPreviewTypeVideo$Input

> **linkPreviewTypeVideo$Input**: `object`

Version of [linkPreviewTypeVideo](linkPreviewTypeVideo.md) for method parameters.

The link is a link to a video

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeVideo"`

### author?

> `readonly` `optional` **author**: `string`

Author of the video

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Duration of the video, in seconds; 0 if unknown

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Expected height of the preview

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the video file

### url?

> `readonly` `optional` **url**: `string`

URL of the video; may be empty if none

### video?

> `readonly` `optional` **video**: [`video$Input`](video$Input-1.md) \| `null`

The video description; may be null if unknown

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Expected width of the preview

## Defined in

dist/generated/types.d.ts:21602
