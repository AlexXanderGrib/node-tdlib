[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / botMediaPreviewInfo$Input

# Type Alias: botMediaPreviewInfo$Input

> **botMediaPreviewInfo$Input**: `object`

Version of [botMediaPreviewInfo](botMediaPreviewInfo.md) for method parameters.

Contains a list of media previews of a bot for the given language and the list of languages for which the bot has dedicated previews

## Type declaration

### \_

> `readonly` **\_**: `"botMediaPreviewInfo"`

### language\_codes?

> `readonly` `optional` **language\_codes**: [`vector$Input`](vector$Input.md)\<`string`\>

List of language codes for which the bot has dedicated previews

### previews?

> `readonly` `optional` **previews**: [`vector$Input`](vector$Input.md)\<[`botMediaPreview$Input`](botMediaPreview$Input.md)\>

List of media previews

## Defined in

dist/generated/types.d.ts:35081
