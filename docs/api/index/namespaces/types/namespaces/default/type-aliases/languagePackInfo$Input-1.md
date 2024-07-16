[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / languagePackInfo$Input

# Type Alias: languagePackInfo$Input

> **languagePackInfo$Input**: `object`

Version of [languagePackInfo](languagePackInfo-1.md) for method parameters.

Contains information about a language pack

## Type declaration

### \_

> `readonly` **\_**: `"languagePackInfo"`

### base\_language\_pack\_id?

> `readonly` `optional` **base\_language\_pack\_id**: `string`

Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it must be fetched from base language pack. Unsupported in custom language packs

### id?

> `readonly` `optional` **id**: `string`

Unique language pack identifier

### is\_beta?

> `readonly` `optional` **is\_beta**: [`Bool$Input`](Bool$Input.md)

True, if the language pack is a beta language pack

### is\_installed?

> `readonly` `optional` **is\_installed**: [`Bool$Input`](Bool$Input.md)

True, if the language pack is installed by the current user

### is\_official?

> `readonly` `optional` **is\_official**: [`Bool$Input`](Bool$Input.md)

True, if the language pack is official

### is\_rtl?

> `readonly` `optional` **is\_rtl**: [`Bool$Input`](Bool$Input.md)

True, if the language pack strings are RTL

### local\_string\_count?

> `readonly` `optional` **local\_string\_count**: [`int32`](int32-1.md)

Total number of non-deleted strings from the language pack available locally

### name?

> `readonly` `optional` **name**: `string`

Language name

### native\_name?

> `readonly` `optional` **native\_name**: `string`

Name of the language in that language

### plural\_code?

> `readonly` `optional` **plural\_code**: `string`

A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information

### total\_string\_count?

> `readonly` `optional` **total\_string\_count**: [`int32`](int32-1.md)

Total number of non-deleted strings from the language pack

### translated\_string\_count?

> `readonly` `optional` **translated\_string\_count**: [`int32`](int32-1.md)

Total number of translated strings from the language pack

### translation\_url?

> `readonly` `optional` **translation\_url**: `string`

Link to language translation interface; empty for custom local language packs

## Defined in

dist/generated/types.d.ts:41160
