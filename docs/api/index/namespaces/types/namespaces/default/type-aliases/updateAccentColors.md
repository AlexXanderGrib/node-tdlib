[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAccentColors

# Type Alias: updateAccentColors

> **updateAccentColors**: `object`

The list of supported accent colors has changed

## Type declaration

### \_

> **\_**: `"updateAccentColors"`

### available\_accent\_color\_ids

> **available\_accent\_color\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

The list of accent color identifiers, which can be set through setAccentColor and setChatAccentColor. The colors must be shown in the specififed order

### colors

> **colors**: [`vector`](vector.md)\<[`accentColor`](accentColor-1.md)\>

Information about supported colors; colors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) must always be supported

- and aren't included in the list. The exact colors for the accent colors with identifiers 0-6 must be taken from the app theme

## Defined in

dist/generated/types.d.ts:56357
