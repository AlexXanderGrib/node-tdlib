[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stickerFullTypeCustomEmoji$Input

# Type Alias: stickerFullTypeCustomEmoji$Input

> **stickerFullTypeCustomEmoji$Input**: `object`

Version of [stickerFullTypeCustomEmoji](stickerFullTypeCustomEmoji.md) for method parameters.

The sticker is a custom emoji to be used inside message text and caption. Currently, only Telegram Premium users can use custom emoji

## Type declaration

### \_

> `readonly` **\_**: `"stickerFullTypeCustomEmoji"`

### custom\_emoji\_id?

> `readonly` `optional` **custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the custom emoji

### needs\_repainting?

> `readonly` `optional` **needs\_repainting**: [`Bool$Input`](Bool$Input.md)

True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places

## Defined in

dist/generated/types.d.ts:4521
