[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resendAuthenticationCode

# Type Alias: resendAuthenticationCode()

> **resendAuthenticationCode**: (`parameters`) => [`Ok`](Ok-1.md)

Resends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode, the next_code_type of the result is not null

- and the server-specified timeout has passed, or when the current authorization state is authorizationStateWaitEmailCode

## Parameters

• **parameters**: [`resendAuthenticationCode$Input`](resendAuthenticationCode$Input.md)

[resendAuthenticationCode$Input](resendAuthenticationCode$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75339
