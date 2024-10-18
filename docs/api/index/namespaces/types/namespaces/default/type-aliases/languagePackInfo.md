[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / languagePackInfo

# Type Alias: languagePackInfo

> **languagePackInfo**: `object`

Contains information about a language pack

## Type declaration

### \_

> **\_**: `"languagePackInfo"`

### base\_language\_pack\_id

> **base\_language\_pack\_id**: `string`

Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it must be fetched from base language pack. Unsupported in custom language packs

### id

> **id**: `string`

Unique language pack identifier

### is\_beta

> **is\_beta**: [`Bool`](Bool.md)

True, if the language pack is a beta language pack

### is\_installed

> **is\_installed**: [`Bool`](Bool.md)

True, if the language pack is installed by the current user

### is\_official

> **is\_official**: [`Bool`](Bool.md)

True, if the language pack is official

### is\_rtl

> **is\_rtl**: [`Bool`](Bool.md)

True, if the language pack strings are RTL

### local\_string\_count

> **local\_string\_count**: [`int32`](int32.md)

Total number of non-deleted strings from the language pack available locally

### name

> **name**: `string`

Language name

### native\_name

> **native\_name**: `string`

Name of the language in that language

### plural\_code

> **plural\_code**: `string`

A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information

### total\_string\_count

> **total\_string\_count**: [`int32`](int32.md)

Total number of non-deleted strings from the language pack

### translated\_string\_count

> **translated\_string\_count**: [`int32`](int32.md)

Total number of translated strings from the language pack

### translation\_url

> **translation\_url**: `string`

Link to language translation interface; empty for custom local language packs

## Defined in

dist/generated/types.d.ts:42481
