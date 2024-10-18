[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / themeSettings$Input

# Type Alias: themeSettings$Input

> **themeSettings$Input**: `object`

Version of [themeSettings](themeSettings.md) for method parameters.

Describes theme settings

## Type declaration

### \_

> `readonly` **\_**: `"themeSettings"`

### accent\_color?

> `readonly` `optional` **accent\_color**: [`int32`](int32.md)

Theme accent color in ARGB format

### animate\_outgoing\_message\_fill?

> `readonly` `optional` **animate\_outgoing\_message\_fill**: [`Bool$Input`](Bool$Input.md)

If true, the freeform gradient fill needs to be animated on every sent message

### background?

> `readonly` `optional` **background**: [`background$Input`](background$Input.md) \| `null`

The background to be used in chats; may be null

### outgoing\_message\_accent\_color?

> `readonly` `optional` **outgoing\_message\_accent\_color**: [`int32`](int32.md)

Accent color of outgoing messages in ARGB format

### outgoing\_message\_fill?

> `readonly` `optional` **outgoing\_message\_fill**: [`BackgroundFill$Input`](BackgroundFill$Input.md)

The fill to be used as a background for outgoing messages

## Defined in

dist/generated/types.d.ts:19426
