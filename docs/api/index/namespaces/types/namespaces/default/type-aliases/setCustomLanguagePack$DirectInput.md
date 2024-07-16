[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setCustomLanguagePack$DirectInput

# Type Alias: setCustomLanguagePack$DirectInput

> **setCustomLanguagePack$DirectInput**: `object`

Adds or changes a custom local language pack to the current localization target

## Type declaration

### info?

> `readonly` `optional` **info**: [`languagePackInfo$Input`](languagePackInfo$Input-1.md)

Information about the language pack. Language pack identifier must start with 'X', consist only of English letters, digits and hyphens, and must not exceed 64 characters. Can be called before authorization

### strings?

> `readonly` `optional` **strings**: [`vector$Input`](vector$Input.md)\<[`languagePackString$Input`](languagePackString$Input-1.md)\>

Strings of the new language pack

## Defined in

dist/generated/types.d.ts:97485
