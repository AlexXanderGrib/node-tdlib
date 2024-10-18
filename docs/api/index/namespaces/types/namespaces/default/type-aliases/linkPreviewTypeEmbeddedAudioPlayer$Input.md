[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeEmbeddedAudioPlayer$Input

# Type Alias: linkPreviewTypeEmbeddedAudioPlayer$Input

> **linkPreviewTypeEmbeddedAudioPlayer$Input**: `object`

Version of [linkPreviewTypeEmbeddedAudioPlayer](linkPreviewTypeEmbeddedAudioPlayer.md) for method parameters.

The link is a link to an audio player

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeEmbeddedAudioPlayer"`

### author?

> `readonly` `optional` **author**: `string`

Author of the audio

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the audio, in seconds

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Expected height of the embedded player

### thumbnail?

> `readonly` `optional` **thumbnail**: [`photo$Input`](photo$Input.md) \| `null`

Thumbnail of the audio; may be null if unknown

### url?

> `readonly` `optional` **url**: `string`

URL of the external audio player

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Expected width of the embedded player

## Defined in

dist/generated/types.d.ts:21921
