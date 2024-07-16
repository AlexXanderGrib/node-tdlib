[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitEmailAddress

# Type Alias: authorizationStateWaitEmailAddress

> **authorizationStateWaitEmailAddress**: `object`

TDLib needs the user's email address to authorize. Call setAuthenticationEmailAddress to provide the email address, or directly call checkAuthenticationEmailCode with Apple ID/Google ID token if allowed

## Type declaration

### \_

> **\_**: `"authorizationStateWaitEmailAddress"`

### allow\_apple\_id

> **allow\_apple\_id**: [`Bool`](Bool.md)

True, if authorization through Apple ID is allowed

### allow\_google\_id

> **allow\_google\_id**: [`Bool`](Bool.md)

True, if authorization through Google ID is allowed

## Defined in

dist/generated/types.d.ts:3169
