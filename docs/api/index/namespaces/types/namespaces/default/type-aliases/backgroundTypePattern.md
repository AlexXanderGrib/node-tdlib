[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / backgroundTypePattern

# Type Alias: backgroundTypePattern

> **backgroundTypePattern**: `object`

A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the background fill chosen by the user

## Type declaration

### \_

> **\_**: `"backgroundTypePattern"`

### fill

> **fill**: [`BackgroundFill`](BackgroundFill.md)

Fill of the background

### intensity

> **intensity**: [`int32`](int32-1.md)

Intensity of the pattern when it is shown above the filled background; 0-100

### is\_inverted

> **is\_inverted**: [`Bool`](Bool.md)

True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only

### is\_moving

> **is\_moving**: [`Bool`](Bool.md)

True, if the background needs to be slightly moved when device is tilted

## Defined in

dist/generated/types.d.ts:43381
