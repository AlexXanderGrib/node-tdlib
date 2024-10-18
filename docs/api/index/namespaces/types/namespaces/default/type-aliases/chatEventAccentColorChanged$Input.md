[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventAccentColorChanged$Input

# Type Alias: chatEventAccentColorChanged$Input

> **chatEventAccentColorChanged$Input**: `object`

Version of [chatEventAccentColorChanged](chatEventAccentColorChanged.md) for method parameters.

The chat accent color or background custom emoji were changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventAccentColorChanged"`

### new\_accent\_color\_id?

> `readonly` `optional` **new\_accent\_color\_id**: [`int32`](int32.md)

New identifier of chat accent color

### new\_background\_custom\_emoji\_id?

> `readonly` `optional` **new\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

New identifier of the custom emoji; 0 if none

### old\_accent\_color\_id?

> `readonly` `optional` **old\_accent\_color\_id**: [`int32`](int32.md)

Previous identifier of chat accent color

### old\_background\_custom\_emoji\_id?

> `readonly` `optional` **old\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Previous identifier of the custom emoji; 0 if none

## Defined in

dist/generated/types.d.ts:41455
