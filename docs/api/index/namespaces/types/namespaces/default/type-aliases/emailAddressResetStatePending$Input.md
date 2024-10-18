[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emailAddressResetStatePending$Input

# Type Alias: emailAddressResetStatePending$Input

> **emailAddressResetStatePending$Input**: `object`

Version of [emailAddressResetStatePending](emailAddressResetStatePending.md) for method parameters.

Email address reset has already been requested. Call resetAuthenticationEmailAddress to check whether immediate reset is possible

## Type declaration

### \_

> `readonly` **\_**: `"emailAddressResetStatePending"`

### reset\_in?

> `readonly` `optional` **reset\_in**: [`int32`](int32.md)

Left time before the email address will be reset, in seconds. updateAuthorizationState is not sent when this field changes

## Defined in

dist/generated/types.d.ts:3026
