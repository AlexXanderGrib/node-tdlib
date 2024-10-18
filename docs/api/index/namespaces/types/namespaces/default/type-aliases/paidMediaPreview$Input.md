[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paidMediaPreview$Input

# Type Alias: paidMediaPreview$Input

> **paidMediaPreview$Input**: `object`

Version of [paidMediaPreview](paidMediaPreview.md) for method parameters.

The media is hidden until the invoice is paid

## Type declaration

### \_

> `readonly` **\_**: `"paidMediaPreview"`

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Media duration, in seconds; 0 if unknown

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Media height; 0 if unknown

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

Media minithumbnail; may be null

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Media width; 0 if unknown

## Defined in

dist/generated/types.d.ts:24331
