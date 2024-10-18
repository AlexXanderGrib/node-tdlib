[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addBotMediaPreview$DirectInput

# Type Alias: addBotMediaPreview$DirectInput

> **addBotMediaPreview$DirectInput**: `object`

Adds a new media preview to the beginning of the list of media previews of a bot. Returns the added preview after addition is completed server-side. The total number of previews must not exceed getOption("bot_media_preview_count_max") for the given language

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot. The bot must be owned and must have the main Web App

### content?

> `readonly` `optional` **content**: [`InputStoryContent$Input`](InputStoryContent$Input.md)

Content of the added preview

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code for which preview is added. If empty, then the preview will be shown to all users for whose languages there are no dedicated previews.

- If non-empty, then there must be an official language pack of the same name, which is returned by getLocalizationTargetInfo

## Defined in

dist/generated/types.d.ts:97849
