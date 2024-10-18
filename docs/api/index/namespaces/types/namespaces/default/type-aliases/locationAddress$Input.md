[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / locationAddress$Input

# Type Alias: locationAddress$Input

> **locationAddress$Input**: `object`

Version of [locationAddress](locationAddress.md) for method parameters.

Describes an address of a location

## Type declaration

### \_

> `readonly` **\_**: `"locationAddress"`

### city?

> `readonly` `optional` **city**: `string`

City; empty if unknown

### country\_code?

> `readonly` `optional` **country\_code**: `string`

A two-letter ISO 3166-1 alpha-2 country code

### state?

> `readonly` `optional` **state**: `string`

State, if applicable; empty if unknown

### street?

> `readonly` `optional` **street**: `string`

The address; empty if unknown

## Defined in

dist/generated/types.d.ts:23067
