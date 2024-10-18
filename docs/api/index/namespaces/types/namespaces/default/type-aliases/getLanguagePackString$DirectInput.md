[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getLanguagePackString$DirectInput

# Type Alias: getLanguagePackString$DirectInput

> **getLanguagePackString$DirectInput**: `object`

Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. Can be called synchronously

## Type declaration

### key?

> `readonly` `optional` **key**: `string`

Language pack key of the string to be returned

### language\_pack\_database\_path?

> `readonly` `optional` **language\_pack\_database\_path**: `string`

Path to the language pack database in which strings are stored

### language\_pack\_id?

> `readonly` `optional` **language\_pack\_id**: `string`

Language pack identifier

### localization\_target?

> `readonly` `optional` **localization\_target**: `string`

Localization target to which the language pack belongs

## Defined in

dist/generated/types.d.ts:84133
