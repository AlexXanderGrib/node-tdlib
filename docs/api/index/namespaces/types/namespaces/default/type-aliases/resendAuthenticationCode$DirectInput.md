[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resendAuthenticationCode$DirectInput

# Type Alias: resendAuthenticationCode$DirectInput

> **resendAuthenticationCode$DirectInput**: `object`

Resends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode, the next_code_type of the result is not null

- and the server-specified timeout has passed, or when the current authorization state is authorizationStateWaitEmailCode

## Type declaration

### reason?

> `readonly` `optional` **reason**: [`ResendCodeReason$Input`](ResendCodeReason$Input.md) \| `null`

Reason of code resending; pass null if unknown

## Defined in

dist/generated/types.d.ts:73336
