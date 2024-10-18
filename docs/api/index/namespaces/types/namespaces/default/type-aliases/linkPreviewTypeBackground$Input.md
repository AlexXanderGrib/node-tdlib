[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeBackground$Input

# Type Alias: linkPreviewTypeBackground$Input

> **linkPreviewTypeBackground$Input**: `object`

Version of [linkPreviewTypeBackground](linkPreviewTypeBackground.md) for method parameters.

The link is a link to a background. Link preview title and description are available only for filled backgrounds

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeBackground"`

### background\_type?

> `readonly` `optional` **background\_type**: [`BackgroundType$Input`](BackgroundType$Input.md) \| `null`

Type of the background; may be null if unknown

### document?

> `readonly` `optional` **document**: [`document$Input`](document$Input.md) \| `null`

Document with the background; may be null for filled backgrounds

## Defined in

dist/generated/types.d.ts:21691
