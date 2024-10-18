[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setAuthenticationPhoneNumber

# Type Alias: setAuthenticationPhoneNumber()

> **setAuthenticationPhoneNumber**: (`parameters`) => [`Ok`](Ok-1.md)

Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

## Parameters

• **parameters**: [`setAuthenticationPhoneNumber$Input`](setAuthenticationPhoneNumber$Input.md)

[setAuthenticationPhoneNumber$Input](setAuthenticationPhoneNumber$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75277
