[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / personalDetails$Input

# Type Alias: personalDetails$Input

> **personalDetails$Input**: `object`

Version of [personalDetails](personalDetails-1.md) for method parameters.

Contains the user's personal details

## Type declaration

### \_

> `readonly` **\_**: `"personalDetails"`

### birthdate?

> `readonly` `optional` **birthdate**: [`date$Input`](date$Input-1.md)

Birthdate of the user

### country\_code?

> `readonly` `optional` **country\_code**: `string`

A two-letter ISO 3166-1 alpha-2 country code of the user's country

### first\_name?

> `readonly` `optional` **first\_name**: `string`

First name of the user written in English; 1-255 characters

### gender?

> `readonly` `optional` **gender**: `string`

Gender of the user, "male" or "female"

### last\_name?

> `readonly` `optional` **last\_name**: `string`

Last name of the user written in English; 1-255 characters

### middle\_name?

> `readonly` `optional` **middle\_name**: `string`

Middle name of the user written in English; 0-255 characters

### native\_first\_name?

> `readonly` `optional` **native\_first\_name**: `string`

Native first name of the user; 1-255 characters

### native\_last\_name?

> `readonly` `optional` **native\_last\_name**: `string`

Native last name of the user; 1-255 characters

### native\_middle\_name?

> `readonly` `optional` **native\_middle\_name**: `string`

Native middle name of the user; 0-255 characters

### residence\_country\_code?

> `readonly` `optional` **residence\_country\_code**: `string`

A two-letter ISO 3166-1 alpha-2 country code of the user's residence country

## Defined in

dist/generated/types.d.ts:24069
