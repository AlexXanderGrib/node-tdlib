[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventProfileAccentColorChanged$Input

# Type Alias: chatEventProfileAccentColorChanged$Input

> **chatEventProfileAccentColorChanged$Input**: `object`

Version of [chatEventProfileAccentColorChanged](chatEventProfileAccentColorChanged.md) for method parameters.

The chat's profile accent color or profile background custom emoji were changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventProfileAccentColorChanged"`

### new\_profile\_accent\_color\_id?

> `readonly` `optional` **new\_profile\_accent\_color\_id**: [`int32`](int32.md)

New identifier of chat's profile accent color; -1 if none

### new\_profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **new\_profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

New identifier of the custom emoji; 0 if none

### old\_profile\_accent\_color\_id?

> `readonly` `optional` **old\_profile\_accent\_color\_id**: [`int32`](int32.md)

Previous identifier of chat's profile accent color; -1 if none

### old\_profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **old\_profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Previous identifier of the custom emoji; 0 if none

## Defined in

dist/generated/types.d.ts:41509
