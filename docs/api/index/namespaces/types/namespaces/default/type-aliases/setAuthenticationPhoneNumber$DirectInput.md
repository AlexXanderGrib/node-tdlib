[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setAuthenticationPhoneNumber$DirectInput

# Type Alias: setAuthenticationPhoneNumber$DirectInput

> **setAuthenticationPhoneNumber$DirectInput**: `object`

Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

## Type declaration

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

The phone number of the user, in international format

### settings?

> `readonly` `optional` **settings**: [`phoneNumberAuthenticationSettings$Input`](phoneNumberAuthenticationSettings$Input.md) \| `null`

Settings for the authentication of the user's phone number; pass null to use default settings

## Defined in

dist/generated/types.d.ts:75257
