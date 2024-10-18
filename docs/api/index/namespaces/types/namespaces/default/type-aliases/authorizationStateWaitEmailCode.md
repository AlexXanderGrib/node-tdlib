[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitEmailCode

# Type Alias: authorizationStateWaitEmailCode

> **authorizationStateWaitEmailCode**: `object`

TDLib needs the user's authentication code sent to an email address to authorize. Call checkAuthenticationEmailCode to provide the code

## Type declaration

### \_

> **\_**: `"authorizationStateWaitEmailCode"`

### allow\_apple\_id

> **allow\_apple\_id**: [`Bool`](Bool.md)

True, if authorization through Apple ID is allowed

### allow\_google\_id

> **allow\_google\_id**: [`Bool`](Bool.md)

True, if authorization through Google ID is allowed

### code\_info

> **code\_info**: [`emailAddressAuthenticationCodeInfo`](emailAddressAuthenticationCodeInfo.md)

Information about the sent authentication code

### email\_address\_reset\_state

> **email\_address\_reset\_state**: [`EmailAddressResetState`](EmailAddressResetState.md) \| `null`

Reset state of the email address; may be null if the email address can't be reset

## Defined in

dist/generated/types.d.ts:3249
