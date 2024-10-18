[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeAudio$Input

# Type Alias: linkPreviewTypeAudio$Input

> **linkPreviewTypeAudio$Input**: `object`

Version of [linkPreviewTypeAudio](linkPreviewTypeAudio.md) for method parameters.

The link is a link to an audio

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeAudio"`

### audio?

> `readonly` `optional` **audio**: [`audio$Input`](audio$Input.md) \| `null`

The audio description; may be null if unknown

### author?

> `readonly` `optional` **author**: `string`

Author of the audio

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the audio, in seconds; 0 if unknown

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the audio file

### url?

> `readonly` `optional` **url**: `string`

URL of the audio; may be empty if none

## Defined in

dist/generated/types.d.ts:21642
