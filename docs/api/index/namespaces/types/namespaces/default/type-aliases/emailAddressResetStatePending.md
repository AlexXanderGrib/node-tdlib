[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emailAddressResetStatePending

# Type Alias: emailAddressResetStatePending

> **emailAddressResetStatePending**: `object`

Email address reset has already been requested. Call resetAuthenticationEmailAddress to check whether immediate reset is possible

## Type declaration

### \_

> **\_**: `"emailAddressResetStatePending"`

### reset\_in

> **reset\_in**: [`int32`](int32.md)

Left time before the email address will be reset, in seconds. updateAuthorizationState is not sent when this field changes

## Defined in

dist/generated/types.d.ts:3013
