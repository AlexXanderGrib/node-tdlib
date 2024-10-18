[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setSupergroupCustomEmojiStickerSet$DirectInput

# Type Alias: setSupergroupCustomEmojiStickerSet$DirectInput

> **setSupergroupCustomEmojiStickerSet$DirectInput**: `object`

Changes the custom emoji sticker set of a supergroup; requires can_change_info administrator right. The chat must have at least chatBoostFeatures.min_custom_emoji_sticker_set_boost_level boost level to pass the corresponding color

## Type declaration

### custom\_emoji\_sticker\_set\_id?

> `readonly` `optional` **custom\_emoji\_sticker\_set\_id**: [`int64$Input`](int64$Input.md)

New value of the custom emoji sticker set identifier for the supergroup. Use 0 to remove the custom emoji sticker set in the supergroup

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup

## Defined in

dist/generated/types.d.ts:98882
