[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatBackground$Input

# Type Alias: setChatBackground$Input

> **setChatBackground$Input**: `object`

Sets the background in a specific chat. Supported only in private and secret chats with non-deleted users, and in chats with sufficient boost level and can_change_info administrator right

## Type declaration

### \_

> `readonly` **\_**: `"setChatBackground"`

### background?

> `readonly` `optional` **background**: [`InputBackground$Input`](InputBackground$Input.md) \| `null`

The input background to use; pass null to create a new filled or chat theme background

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### dark\_theme\_dimming?

> `readonly` `optional` **dark\_theme\_dimming**: [`int32`](int32-1.md)

Dimming of the background in dark themes, as a percentage; 0-100. Applied only to Wallpaper and Fill types of background

### only\_for\_self?

> `readonly` `optional` **only\_for\_self**: [`Bool$Input`](Bool$Input.md)

Pass true to set background only for self; pass false to set background for all chat users. Always false for backgrounds set in boosted chats. Background can be set for both users only by Telegram Premium users and if set background isn't of the type inputBackgroundPrevious

### type?

> `readonly` `optional` **type**: [`BackgroundType$Input`](BackgroundType$Input.md) \| `null`

Background type; pass null to use default background type for the chosen background; backgroundTypeChatTheme isn't supported for private and secret chats.

- Use chatBoostLevelFeatures.chat_theme_background_count and chatBoostLevelFeatures.can_set_custom_background to check whether the background type can be set in the boosted chat

## Defined in

dist/generated/types.d.ts:85455
