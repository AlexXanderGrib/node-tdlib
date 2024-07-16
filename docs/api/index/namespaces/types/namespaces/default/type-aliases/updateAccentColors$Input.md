[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAccentColors$Input

# Type Alias: updateAccentColors$Input

> **updateAccentColors$Input**: `object`

Version of [updateAccentColors](updateAccentColors.md) for method parameters.

The list of supported accent colors has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateAccentColors"`

### available\_accent\_color\_ids?

> `readonly` `optional` **available\_accent\_color\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

The list of accent color identifiers, which can be set through setAccentColor and setChatAccentColor. The colors must be shown in the specififed order

### colors?

> `readonly` `optional` **colors**: [`vector$Input`](vector$Input.md)\<[`accentColor$Input`](accentColor$Input-1.md)\>

Information about supported colors; colors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) must always be supported

- and aren't included in the list. The exact colors for the accent colors with identifiers 0-6 must be taken from the app theme

## Defined in

dist/generated/types.d.ts:56377
