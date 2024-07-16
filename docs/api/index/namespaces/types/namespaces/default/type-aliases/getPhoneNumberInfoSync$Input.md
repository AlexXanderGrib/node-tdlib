[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getPhoneNumberInfoSync$Input

# Type Alias: getPhoneNumberInfoSync$Input

> **getPhoneNumberInfoSync$Input**: `object`

Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously

## Type declaration

### \_

> `readonly` **\_**: `"getPhoneNumberInfoSync"`

### language\_code?

> `readonly` `optional` **language\_code**: `string`

A two-letter ISO 639-1 language code for country information localization

### phone\_number\_prefix?

> `readonly` `optional` **phone\_number\_prefix**: `string`

The phone number prefix

## Defined in

dist/generated/types.d.ts:101210
