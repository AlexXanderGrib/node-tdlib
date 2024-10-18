[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeEmbeddedAnimationPlayer$Input

# Type Alias: linkPreviewTypeEmbeddedAnimationPlayer$Input

> **linkPreviewTypeEmbeddedAnimationPlayer$Input**: `object`

Version of [linkPreviewTypeEmbeddedAnimationPlayer](linkPreviewTypeEmbeddedAnimationPlayer.md) for method parameters.

The link is a link to an animation player

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeEmbeddedAnimationPlayer"`

### author?

> `readonly` `optional` **author**: `string`

Author of the animation

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the animation, in seconds

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Expected height of the embedded player

### thumbnail?

> `readonly` `optional` **thumbnail**: [`photo$Input`](photo$Input.md) \| `null`

Thumbnail of the animation; may be null if unknown

### url?

> `readonly` `optional` **url**: `string`

URL of the external animation player

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Expected width of the embedded player

## Defined in

dist/generated/types.d.ts:21847
