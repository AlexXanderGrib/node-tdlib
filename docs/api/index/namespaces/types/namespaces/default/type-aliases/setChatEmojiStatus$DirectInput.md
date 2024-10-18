[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatEmojiStatus$DirectInput

# Type Alias: setChatEmojiStatus$DirectInput

> **setChatEmojiStatus$DirectInput**: `object`

Changes the emoji status of a chat. Use chatBoostLevelFeatures.can_set_emoji_status to check whether an emoji status can be set. Requires can_change_info administrator right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### emoji\_status?

> `readonly` `optional` **emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input.md) \| `null`

New emoji status; pass null to remove emoji status

## Defined in

dist/generated/types.d.ts:87694
