[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatPhoto$DirectInput

# Type Alias: setChatPhoto$DirectInput

> **setChatPhoto$DirectInput**: `object`

Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info member right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### photo?

> `readonly` `optional` **photo**: [`InputChatPhoto$Input`](InputChatPhoto$Input.md) \| `null`

New chat photo; pass null to delete the chat photo

## Defined in

dist/generated/types.d.ts:85213
