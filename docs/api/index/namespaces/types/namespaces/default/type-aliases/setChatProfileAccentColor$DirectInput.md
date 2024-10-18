[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatProfileAccentColor$DirectInput

# Type Alias: setChatProfileAccentColor$DirectInput

> **setChatProfileAccentColor$DirectInput**: `object`

Changes accent color and background custom emoji for profile of a supergroup or channel chat. Requires can_change_info administrator right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### profile\_accent\_color\_id?

> `readonly` `optional` **profile\_accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color to use for profile; pass -1 if none. The chat must have at least profileAccentColor.min_supergroup_chat_boost_level for supergroups

- or profileAccentColor.min_channel_chat_boost_level for channels boost level to pass the corresponding color

### profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of a custom emoji to be shown on the chat's profile photo background; 0 if none. Use chatBoostLevelFeatures.can_set_profile_background_custom_emoji to check whether a custom emoji can be set

## Defined in

dist/generated/types.d.ts:87605
