[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emailAddressResetStateAvailable$Input

# Type Alias: emailAddressResetStateAvailable$Input

> **emailAddressResetStateAvailable$Input**: `object`

Version of [emailAddressResetStateAvailable](emailAddressResetStateAvailable.md) for method parameters.

Email address can be reset after the given period. Call resetAuthenticationEmailAddress to reset it and allow the user to authorize with a code sent to the user's phone number

## Type declaration

### \_

> `readonly` **\_**: `"emailAddressResetStateAvailable"`

### wait\_period?

> `readonly` `optional` **wait\_period**: [`int32`](int32.md)

Time required to wait before the email address can be reset; 0 if the user is subscribed to Telegram Premium

## Defined in

dist/generated/types.d.ts:3002
