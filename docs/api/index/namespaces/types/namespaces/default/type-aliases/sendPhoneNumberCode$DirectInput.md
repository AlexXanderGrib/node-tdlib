[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendPhoneNumberCode$DirectInput

# Type Alias: sendPhoneNumberCode$DirectInput

> **sendPhoneNumberCode$DirectInput**: `object`

Sends a code to the specified phone number. Aborts previous phone number verification if there was one. On success, returns information about the sent code

## Type declaration

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

The phone number, in international format

### settings?

> `readonly` `optional` **settings**: [`phoneNumberAuthenticationSettings$Input`](phoneNumberAuthenticationSettings$Input-1.md) \| `null`

Settings for the authentication of the user's phone number; pass null to use default settings

### type?

> `readonly` `optional` **type**: [`PhoneNumberCodeType$Input`](PhoneNumberCodeType$Input.md)

Type of the request for which the code is sent

## Defined in

dist/generated/types.d.ts:94451
