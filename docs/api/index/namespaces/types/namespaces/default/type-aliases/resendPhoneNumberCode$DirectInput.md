[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resendPhoneNumberCode$DirectInput

# Type Alias: resendPhoneNumberCode$DirectInput

> **resendPhoneNumberCode$DirectInput**: `object`

Resends the authentication code sent to a phone number. Works only if the previously received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed

## Type declaration

### reason?

> `readonly` `optional` **reason**: [`ResendCodeReason$Input`](ResendCodeReason$Input.md) \| `null`

Reason of code resending; pass null if unknown

## Defined in

dist/generated/types.d.ts:97042
