[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passportAuthorizationForm

# Type Alias: passportAuthorizationForm

> **passportAuthorizationForm**: `object`

Contains information about a Telegram Passport authorization form that was requested

## Type declaration

### \_

> **\_**: `"passportAuthorizationForm"`

### id

> **id**: [`int32`](int32-1.md)

Unique identifier of the authorization form

### privacy\_policy\_url

> **privacy\_policy\_url**: `string`

URL for the privacy policy of the service; may be empty

### required\_elements

> **required\_elements**: [`vector`](vector.md)\<[`passportRequiredElement`](passportRequiredElement-1.md)\>

Telegram Passport elements that must be provided to complete the form

## Defined in

dist/generated/types.d.ts:25267
