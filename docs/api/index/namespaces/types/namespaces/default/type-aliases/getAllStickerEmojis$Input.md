[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getAllStickerEmojis$Input

# Type Alias: getAllStickerEmojis$Input

> **getAllStickerEmojis$Input**: `object`

Returns unique emoji that correspond to stickers to be found by the getStickers(sticker_type, query, 1000000, chat_id)

## Type declaration

### \_

> `readonly` **\_**: `"getAllStickerEmojis"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier for which to find stickers

### query?

> `readonly` `optional` **query**: `string`

Search query

### return\_only\_main\_emoji?

> `readonly` `optional` **return\_only\_main\_emoji**: [`Bool$Input`](Bool$Input.md)

Pass true if only main emoji for each found sticker must be included in the result

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the stickers to search for

## Defined in

dist/generated/types.d.ts:92567
