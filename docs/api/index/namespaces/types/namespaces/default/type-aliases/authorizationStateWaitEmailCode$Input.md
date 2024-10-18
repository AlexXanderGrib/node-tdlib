[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitEmailCode$Input

# Type Alias: authorizationStateWaitEmailCode$Input

> **authorizationStateWaitEmailCode$Input**: `object`

Version of [authorizationStateWaitEmailCode](authorizationStateWaitEmailCode.md) for method parameters.

TDLib needs the user's authentication code sent to an email address to authorize. Call checkAuthenticationEmailCode to provide the code

## Type declaration

### \_

> `readonly` **\_**: `"authorizationStateWaitEmailCode"`

### allow\_apple\_id?

> `readonly` `optional` **allow\_apple\_id**: [`Bool$Input`](Bool$Input.md)

True, if authorization through Apple ID is allowed

### allow\_google\_id?

> `readonly` `optional` **allow\_google\_id**: [`Bool$Input`](Bool$Input.md)

True, if authorization through Google ID is allowed

### code\_info?

> `readonly` `optional` **code\_info**: [`emailAddressAuthenticationCodeInfo$Input`](emailAddressAuthenticationCodeInfo$Input.md)

Information about the sent authentication code

### email\_address\_reset\_state?

> `readonly` `optional` **email\_address\_reset\_state**: [`EmailAddressResetState$Input`](EmailAddressResetState$Input.md) \| `null`

Reset state of the email address; may be null if the email address can't be reset

## Defined in

dist/generated/types.d.ts:3277
