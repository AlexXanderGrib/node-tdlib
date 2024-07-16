[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setDefaultBackground$Input

# Type Alias: setDefaultBackground$Input

> **setDefaultBackground$Input**: `object`

Sets default background for chats; adds the background to the list of installed backgrounds

## Type declaration

### \_

> `readonly` **\_**: `"setDefaultBackground"`

### background?

> `readonly` `optional` **background**: [`InputBackground$Input`](InputBackground$Input.md) \| `null`

The input background to use; pass null to create a new filled background

### for\_dark\_theme?

> `readonly` `optional` **for\_dark\_theme**: [`Bool$Input`](Bool$Input.md)

Pass true if the background is set for a dark theme

### type?

> `readonly` `optional` **type**: [`BackgroundType$Input`](BackgroundType$Input.md) \| `null`

Background type; pass null to use the default type of the remote background; backgroundTypeChatTheme isn't supported

## Defined in

dist/generated/types.d.ts:97164
