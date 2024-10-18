[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeStickerSet$Input

# Type Alias: internalLinkTypeStickerSet$Input

> **internalLinkTypeStickerSet$Input**: `object`

Version of [internalLinkTypeStickerSet](internalLinkTypeStickerSet.md) for method parameters.

The link is a link to a sticker set. Call searchStickerSet with the given sticker set name to process the link and show the sticker set.

- If the sticker set is found and the user wants to add it, then call changeStickerSet

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeStickerSet"`

### expect\_custom\_emoji?

> `readonly` `optional` **expect\_custom\_emoji**: [`Bool$Input`](Bool$Input.md)

True, if the sticker set is expected to contain custom emoji

### sticker\_set\_name?

> `readonly` `optional` **sticker\_set\_name**: `string`

Name of the sticker set

## Defined in

dist/generated/types.d.ts:49977
