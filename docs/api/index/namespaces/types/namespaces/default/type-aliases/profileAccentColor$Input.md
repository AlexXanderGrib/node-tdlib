[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / profileAccentColor$Input

# Type Alias: profileAccentColor$Input

> **profileAccentColor$Input**: `object`

Version of [profileAccentColor](profileAccentColor.md) for method parameters.

Contains information about supported accent color for user profile photo background

## Type declaration

### \_

> `readonly` **\_**: `"profileAccentColor"`

### dark\_theme\_colors?

> `readonly` `optional` **dark\_theme\_colors**: [`profileAccentColors$Input`](profileAccentColors$Input.md)

Accent colors expected to be used in dark themes

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Profile accent color identifier

### light\_theme\_colors?

> `readonly` `optional` **light\_theme\_colors**: [`profileAccentColors$Input`](profileAccentColors$Input.md)

Accent colors expected to be used in light themes

### min\_channel\_chat\_boost\_level?

> `readonly` `optional` **min\_channel\_chat\_boost\_level**: [`int32`](int32.md)

The minimum chat boost level required to use the color in a channel chat

### min\_supergroup\_chat\_boost\_level?

> `readonly` `optional` **min\_supergroup\_chat\_boost\_level**: [`int32`](int32.md)

The minimum chat boost level required to use the color in a supergroup chat

## Defined in

dist/generated/types.d.ts:9458
