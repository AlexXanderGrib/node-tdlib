[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getBotMediaPreviewInfo$Input

# Type Alias: getBotMediaPreviewInfo$Input

> **getBotMediaPreviewInfo$Input**: `object`

Returns the list of media previews for the given language and the list of languages for which the bot has dedicated previews

## Type declaration

### \_

> `readonly` **\_**: `"getBotMediaPreviewInfo"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot. The bot must be owned and must have the main Web App

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code for which to get previews. If empty, then default previews are returned

## Defined in

dist/generated/types.d.ts:97788
