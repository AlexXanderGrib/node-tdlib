[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / maskPosition

# Type Alias: maskPosition

> **maskPosition**: `object`

Position on a photo where a mask is placed

## Type declaration

### \_

> **\_**: `"maskPosition"`

### point

> **point**: [`MaskPoint`](MaskPoint.md)

Part of the face, relative to which the mask is placed

### scale

> **scale**: [`double`](double.md)

Mask scaling coefficient. (For example, 2.0 means a doubled size)

### x\_shift

> **x\_shift**: [`double`](double.md)

Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)

### y\_shift

> **y\_shift**: [`double`](double.md)

Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)

## Defined in

dist/generated/types.d.ts:4363
