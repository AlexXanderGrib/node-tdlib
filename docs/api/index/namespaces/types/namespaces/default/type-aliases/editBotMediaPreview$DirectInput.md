[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editBotMediaPreview$DirectInput

# Type Alias: editBotMediaPreview$DirectInput

> **editBotMediaPreview$DirectInput**: `object`

Replaces media preview in the list of media previews of a bot. Returns the new preview after edit is completed server-side

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot. The bot must be owned and must have the main Web App

### content?

> `readonly` `optional` **content**: [`InputStoryContent$Input`](InputStoryContent$Input.md)

Content of the new preview

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32.md)

File identifier of the media to replace

### language\_code?

> `readonly` `optional` **language\_code**: `string`

Language code of the media preview to edit

## Defined in

dist/generated/types.d.ts:97904
