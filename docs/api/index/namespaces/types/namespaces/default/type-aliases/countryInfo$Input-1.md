[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / countryInfo$Input

# Type Alias: countryInfo$Input

> **countryInfo$Input**: `object`

Version of [countryInfo](countryInfo-1.md) for method parameters.

Contains information about a country

## Type declaration

### \_

> `readonly` **\_**: `"countryInfo"`

### calling\_codes?

> `readonly` `optional` **calling\_codes**: [`vector$Input`](vector$Input.md)\<`string`\>

List of country calling codes

### country\_code?

> `readonly` `optional` **country\_code**: `string`

A two-letter ISO 3166-1 alpha-2 country code

### english\_name?

> `readonly` `optional` **english\_name**: `string`

English name of the country

### is\_hidden?

> `readonly` `optional` **is\_hidden**: [`Bool$Input`](Bool$Input.md)

True, if the country must be hidden from the list of all countries

### name?

> `readonly` `optional` **name**: `string`

Native name of the country

## Defined in

dist/generated/types.d.ts:21906
