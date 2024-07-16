[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeLanguagePack$Input

# Type Alias: internalLinkTypeLanguagePack$Input

> **internalLinkTypeLanguagePack$Input**: `object`

Version of [internalLinkTypeLanguagePack](internalLinkTypeLanguagePack.md) for method parameters.

The link is a link to a language pack. Call getLanguagePackInfo with the given language pack identifier to process the link.

- If the language pack is found and the user wants to apply it, then call setOption for the option "language_pack_id"

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeLanguagePack"`

### language\_pack\_id?

> `readonly` `optional` **language\_pack\_id**: `string`

Language pack identifier

## Defined in

dist/generated/types.d.ts:47910
