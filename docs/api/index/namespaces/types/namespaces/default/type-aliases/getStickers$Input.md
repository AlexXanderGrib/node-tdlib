[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStickers$Input

# Type Alias: getStickers$Input

> **getStickers$Input**: `object`

Returns stickers from the installed sticker sets that correspond to any of the given emoji or can be found by sticker-specific keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned

## Type declaration

### \_

> `readonly` **\_**: `"getStickers"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier for which to return stickers. Available custom emoji stickers may be different for different chats

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of stickers to be returned

### query?

> `readonly` `optional` **query**: `string`

Search query; a space-separated list of emojis or a keyword prefix. If empty, returns all known installed stickers

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the stickers to return

## Defined in

dist/generated/types.d.ts:92509
