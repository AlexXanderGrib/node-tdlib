[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatAccentColor$DirectInput

# Type Alias: setChatAccentColor$DirectInput

> **setChatAccentColor$DirectInput**: `object`

Changes accent color and background custom emoji of a channel chat. Requires can_change_info administrator right

## Type declaration

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color to use. The chat must have at least accentColor.min_channel_chat_boost_level boost level to pass the corresponding color

### background\_custom\_emoji\_id?

> `readonly` `optional` **background\_custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none. Use chatBoostLevelFeatures.can_set_background_custom_emoji to check whether a custom emoji can be set

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

## Defined in

dist/generated/types.d.ts:85256
