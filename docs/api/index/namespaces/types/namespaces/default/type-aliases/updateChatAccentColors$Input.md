[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatAccentColors$Input

# Type Alias: updateChatAccentColors$Input

> **updateChatAccentColors$Input**: `object`

Version of [updateChatAccentColors](updateChatAccentColors.md) for method parameters.

Chat accent colors have changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatAccentColors"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32-1.md)

The new chat accent color identifier

### background\_custom\_emoji\_id?

> `readonly` `optional` **background\_custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

The new identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### profile\_accent\_color\_id?

> `readonly` `optional` **profile\_accent\_color\_id**: [`int32`](int32-1.md)

The new chat profile accent color identifier; -1 if none

### profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

The new identifier of a custom emoji to be shown on the profile background; 0 if none

## Defined in

dist/generated/types.d.ts:53316
