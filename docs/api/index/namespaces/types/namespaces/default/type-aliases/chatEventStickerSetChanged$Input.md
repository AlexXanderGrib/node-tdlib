[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventStickerSetChanged$Input

# Type Alias: chatEventStickerSetChanged$Input

> **chatEventStickerSetChanged$Input**: `object`

Version of [chatEventStickerSetChanged](chatEventStickerSetChanged.md) for method parameters.

The supergroup sticker set was changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventStickerSetChanged"`

### new\_sticker\_set\_id?

> `readonly` `optional` **new\_sticker\_set\_id**: [`int64$Input`](int64$Input.md)

New identifier of the chat sticker set; 0 if none

### old\_sticker\_set\_id?

> `readonly` `optional` **old\_sticker\_set\_id**: [`int64$Input`](int64$Input.md)

Previous identifier of the chat sticker set; 0 if none

## Defined in

dist/generated/types.d.ts:41275
