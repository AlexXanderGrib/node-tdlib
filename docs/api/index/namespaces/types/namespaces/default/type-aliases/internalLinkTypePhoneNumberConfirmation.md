[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePhoneNumberConfirmation

# Type Alias: internalLinkTypePhoneNumberConfirmation

> **internalLinkTypePhoneNumberConfirmation**: `object`

The link can be used to confirm ownership of a phone number to prevent account deletion. Call sendPhoneNumberCode with the given phone number and with phoneNumberCodeTypeConfirmOwnership with the given hash to process the link.

- If succeeded, call checkPhoneNumberCode to check entered by the user code, or resendPhoneNumberCode to resend it

## Type declaration

### \_

> **\_**: `"internalLinkTypePhoneNumberConfirmation"`

### hash

> **hash**: `string`

Hash value from the link

### phone\_number

> **phone\_number**: `string`

Phone number value from the link

## Defined in

dist/generated/types.d.ts:49687
