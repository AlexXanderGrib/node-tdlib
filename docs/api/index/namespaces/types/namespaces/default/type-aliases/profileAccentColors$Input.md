[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / profileAccentColors$Input

# Type Alias: profileAccentColors$Input

> **profileAccentColors$Input**: `object`

Version of [profileAccentColors](profileAccentColors.md) for method parameters.

Contains information about supported accent colors for user profile photo background in RGB format

## Type declaration

### \_

> `readonly` **\_**: `"profileAccentColors"`

### background\_colors?

> `readonly` `optional` **background\_colors**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The list of 1-2 colors in RGB format, describing the colors, as expected to be used for the profile photo background

### palette\_colors?

> `readonly` `optional` **palette\_colors**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The list of 1-2 colors in RGB format, describing the colors, as expected to be shown in the color palette settings

### story\_colors?

> `readonly` `optional` **story\_colors**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The list of 2 colors in RGB format, describing the colors of the gradient to be used for the unread active story indicator around profile photo

## Defined in

dist/generated/types.d.ts:9404
