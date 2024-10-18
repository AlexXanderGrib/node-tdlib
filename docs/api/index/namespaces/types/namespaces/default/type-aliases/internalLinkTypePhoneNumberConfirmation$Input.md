[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePhoneNumberConfirmation$Input

# Type Alias: internalLinkTypePhoneNumberConfirmation$Input

> **internalLinkTypePhoneNumberConfirmation$Input**: `object`

Version of [internalLinkTypePhoneNumberConfirmation](internalLinkTypePhoneNumberConfirmation.md) for method parameters.

The link can be used to confirm ownership of a phone number to prevent account deletion. Call sendPhoneNumberCode with the given phone number and with phoneNumberCodeTypeConfirmOwnership with the given hash to process the link.

- If succeeded, call checkPhoneNumberCode to check entered by the user code, or resendPhoneNumberCode to resend it

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypePhoneNumberConfirmation"`

### hash?

> `readonly` `optional` **hash**: `string`

Hash value from the link

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number value from the link

## Defined in

dist/generated/types.d.ts:49707
