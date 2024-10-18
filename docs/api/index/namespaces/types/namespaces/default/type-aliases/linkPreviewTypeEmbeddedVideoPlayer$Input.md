[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeEmbeddedVideoPlayer$Input

# Type Alias: linkPreviewTypeEmbeddedVideoPlayer$Input

> **linkPreviewTypeEmbeddedVideoPlayer$Input**: `object`

Version of [linkPreviewTypeEmbeddedVideoPlayer](linkPreviewTypeEmbeddedVideoPlayer.md) for method parameters.

The link is a link to a video player

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeEmbeddedVideoPlayer"`

### author?

> `readonly` `optional` **author**: `string`

Author of the video

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the video, in seconds

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Expected height of the embedded player

### thumbnail?

> `readonly` `optional` **thumbnail**: [`photo$Input`](photo$Input.md) \| `null`

Thumbnail of the video; may be null if unknown

### url?

> `readonly` `optional` **url**: `string`

URL of the external video player

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Expected width of the embedded player

## Defined in

dist/generated/types.d.ts:21995
