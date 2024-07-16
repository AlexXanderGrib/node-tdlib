[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateLanguagePackStrings$Input

# Type Alias: updateLanguagePackStrings$Input

> **updateLanguagePackStrings$Input**: `object`

Version of [updateLanguagePackStrings](updateLanguagePackStrings.md) for method parameters.

Some language pack strings have been updated

## Type declaration

### \_

> `readonly` **\_**: `"updateLanguagePackStrings"`

### language\_pack\_id?

> `readonly` `optional` **language\_pack\_id**: `string`

Identifier of the updated language pack

### localization\_target?

> `readonly` `optional` **localization\_target**: `string`

Localization target to which the language pack belongs

### strings?

> `readonly` `optional` **strings**: [`vector$Input`](vector$Input.md)\<[`languagePackString$Input`](languagePackString$Input-1.md)\>

List of changed language pack strings; empty if all strings have changed

## Defined in

dist/generated/types.d.ts:56452
