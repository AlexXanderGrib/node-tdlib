[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emojiStatus$Input

# Type Alias: emojiStatus$Input

> **emojiStatus$Input**: `object`

Version of [emojiStatus](emojiStatus.md) for method parameters.

Describes a custom emoji to be shown instead of the Telegram Premium badge

## Type declaration

### \_

> `readonly` **\_**: `"emojiStatus"`

### custom\_emoji\_id?

> `readonly` `optional` **custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of the custom emoji in stickerFormatTgs format

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the status will expire; 0 if never

## Defined in

dist/generated/types.d.ts:9507
