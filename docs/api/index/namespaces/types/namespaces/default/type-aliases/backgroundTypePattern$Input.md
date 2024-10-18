[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / backgroundTypePattern$Input

# Type Alias: backgroundTypePattern$Input

> **backgroundTypePattern$Input**: `object`

Version of [backgroundTypePattern](backgroundTypePattern.md) for method parameters.

A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the background fill chosen by the user

## Type declaration

### \_

> `readonly` **\_**: `"backgroundTypePattern"`

### fill?

> `readonly` `optional` **fill**: [`BackgroundFill$Input`](BackgroundFill$Input.md)

Fill of the background

### intensity?

> `readonly` `optional` **intensity**: [`int32`](int32.md)

Intensity of the pattern when it is shown above the filled background; 0-100

### is\_inverted?

> `readonly` `optional` **is\_inverted**: [`Bool$Input`](Bool$Input.md)

True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only

### is\_moving?

> `readonly` `optional` **is\_moving**: [`Bool$Input`](Bool$Input.md)

True, if the background needs to be slightly moved when device is tilted

## Defined in

dist/generated/types.d.ts:44935
