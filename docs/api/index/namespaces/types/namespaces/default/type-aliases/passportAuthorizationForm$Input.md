[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passportAuthorizationForm$Input

# Type Alias: passportAuthorizationForm$Input

> **passportAuthorizationForm$Input**: `object`

Version of [passportAuthorizationForm](passportAuthorizationForm.md) for method parameters.

Contains information about a Telegram Passport authorization form that was requested

## Type declaration

### \_

> `readonly` **\_**: `"passportAuthorizationForm"`

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Unique identifier of the authorization form

### privacy\_policy\_url?

> `readonly` `optional` **privacy\_policy\_url**: `string`

URL for the privacy policy of the service; may be empty

### required\_elements?

> `readonly` `optional` **required\_elements**: [`vector$Input`](vector$Input.md)\<[`passportRequiredElement$Input`](passportRequiredElement$Input.md)\>

Telegram Passport elements that must be provided to complete the form

## Defined in

dist/generated/types.d.ts:26050
