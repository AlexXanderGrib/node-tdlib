[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitEmailAddress$Input

# Type Alias: authorizationStateWaitEmailAddress$Input

> **authorizationStateWaitEmailAddress$Input**: `object`

Version of [authorizationStateWaitEmailAddress](authorizationStateWaitEmailAddress.md) for method parameters.

TDLib needs the user's email address to authorize. Call setAuthenticationEmailAddress to provide the email address, or directly call checkAuthenticationEmailCode with Apple ID/Google ID token if allowed

## Type declaration

### \_

> `readonly` **\_**: `"authorizationStateWaitEmailAddress"`

### allow\_apple\_id?

> `readonly` `optional` **allow\_apple\_id**: [`Bool$Input`](Bool$Input.md)

True, if authorization through Apple ID is allowed

### allow\_google\_id?

> `readonly` `optional` **allow\_google\_id**: [`Bool$Input`](Bool$Input.md)

True, if authorization through Google ID is allowed

## Defined in

dist/generated/types.d.ts:3233
