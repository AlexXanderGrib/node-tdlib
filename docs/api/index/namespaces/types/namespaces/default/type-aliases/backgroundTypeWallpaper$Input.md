[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / backgroundTypeWallpaper$Input

# Type Alias: backgroundTypeWallpaper$Input

> **backgroundTypeWallpaper$Input**: `object`

Version of [backgroundTypeWallpaper](backgroundTypeWallpaper.md) for method parameters.

A wallpaper in JPEG format

## Type declaration

### \_

> `readonly` **\_**: `"backgroundTypeWallpaper"`

### is\_blurred?

> `readonly` `optional` **is\_blurred**: [`Bool$Input`](Bool$Input.md)

True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred with radius 12

### is\_moving?

> `readonly` `optional` **is\_moving**: [`Bool$Input`](Bool$Input.md)

True, if the background needs to be slightly moved when device is tilted

## Defined in

dist/generated/types.d.ts:44891
