[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatEmojiStatus$Input

# Type Alias: updateChatEmojiStatus$Input

> **updateChatEmojiStatus$Input**: `object`

Version of [updateChatEmojiStatus](updateChatEmojiStatus.md) for method parameters.

Chat emoji status has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatEmojiStatus"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### emoji\_status?

> `readonly` `optional` **emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input-1.md) \| `null`

The new chat emoji status; may be null

## Defined in

dist/generated/types.d.ts:53769
