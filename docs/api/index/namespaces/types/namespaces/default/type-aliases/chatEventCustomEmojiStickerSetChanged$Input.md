[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventCustomEmojiStickerSetChanged$Input

# Type Alias: chatEventCustomEmojiStickerSetChanged$Input

> **chatEventCustomEmojiStickerSetChanged$Input**: `object`

Version of [chatEventCustomEmojiStickerSetChanged](chatEventCustomEmojiStickerSetChanged.md) for method parameters.

The supergroup sticker set with allowed custom emoji was changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventCustomEmojiStickerSetChanged"`

### new\_sticker\_set\_id?

> `readonly` `optional` **new\_sticker\_set\_id**: [`int64$Input`](int64$Input-1.md)

New identifier of the chat sticker set; 0 if none

### old\_sticker\_set\_id?

> `readonly` `optional` **old\_sticker\_set\_id**: [`int64$Input`](int64$Input-1.md)

Previous identifier of the chat sticker set; 0 if none

## Defined in

dist/generated/types.d.ts:39939
