[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emailAddressResetStateAvailable

# Type Alias: emailAddressResetStateAvailable

> **emailAddressResetStateAvailable**: `object`

Email address can be reset after the given period. Call resetAuthenticationEmailAddress to reset it and allow the user to authorize with a code sent to the user's phone number

## Type declaration

### \_

> **\_**: `"emailAddressResetStateAvailable"`

### wait\_period

> **wait\_period**: [`int32`](int32-1.md)

Time required to wait before the email address can be reset; 0 if the user is subscribed to Telegram Premium

## Defined in

dist/generated/types.d.ts:2943
