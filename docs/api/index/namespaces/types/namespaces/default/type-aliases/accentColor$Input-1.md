[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / accentColor$Input

# Type Alias: accentColor$Input

> **accentColor$Input**: `object`

Version of [accentColor](accentColor-1.md) for method parameters.

Contains information about supported accent color for user/chat name, background of empty chat photo, replies to messages and link previews

## Type declaration

### \_

> `readonly` **\_**: `"accentColor"`

### built\_in\_accent\_color\_id?

> `readonly` `optional` **built\_in\_accent\_color\_id**: [`int32`](int32-1.md)

Identifier of a built-in color to use in places, where only one color is needed; 0-6

### dark\_theme\_colors?

> `readonly` `optional` **dark\_theme\_colors**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

The list of 1-3 colors in RGB format, describing the accent color, as expected to be shown in dark themes

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Accent color identifier

### light\_theme\_colors?

> `readonly` `optional` **light\_theme\_colors**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

The list of 1-3 colors in RGB format, describing the accent color, as expected to be shown in light themes

### min\_channel\_chat\_boost\_level?

> `readonly` `optional` **min\_channel\_chat\_boost\_level**: [`int32`](int32-1.md)

The minimum chat boost level required to use the color in a channel chat

## Defined in

dist/generated/types.d.ts:8914
