[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateProfileAccentColors$Input

# Type Alias: updateProfileAccentColors$Input

> **updateProfileAccentColors$Input**: `object`

Version of [updateProfileAccentColors](updateProfileAccentColors.md) for method parameters.

The list of supported accent colors for user profiles has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateProfileAccentColors"`

### available\_accent\_color\_ids?

> `readonly` `optional` **available\_accent\_color\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The list of accent color identifiers, which can be set through setProfileAccentColor and setChatProfileAccentColor. The colors must be shown in the specififed order

### colors?

> `readonly` `optional` **colors**: [`vector$Input`](vector$Input.md)\<[`profileAccentColor$Input`](profileAccentColor$Input.md)\>

Information about supported colors

## Defined in

dist/generated/types.d.ts:58029
