[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / maskPosition$Input

# Type Alias: maskPosition$Input

> **maskPosition$Input**: `object`

Version of [maskPosition](maskPosition.md) for method parameters.

Position on a photo where a mask is placed

## Type declaration

### \_

> `readonly` **\_**: `"maskPosition"`

### point?

> `readonly` `optional` **point**: [`MaskPoint$Input`](MaskPoint$Input.md)

Part of the face, relative to which the mask is placed

### scale?

> `readonly` `optional` **scale**: [`double`](double.md)

Mask scaling coefficient. (For example, 2.0 means a doubled size)

### x\_shift?

> `readonly` `optional` **x\_shift**: [`double`](double.md)

Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)

### y\_shift?

> `readonly` `optional` **y\_shift**: [`double`](double.md)

Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)

## Defined in

dist/generated/types.d.ts:4391
