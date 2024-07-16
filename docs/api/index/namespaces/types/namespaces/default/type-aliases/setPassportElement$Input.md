[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setPassportElement$Input

# Type Alias: setPassportElement$Input

> **setPassportElement$Input**: `object`

Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first

## Type declaration

### \_

> `readonly` **\_**: `"setPassportElement"`

### element?

> `readonly` `optional` **element**: [`InputPassportElement$Input`](InputPassportElement$Input.md)

Input Telegram Passport element

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

## Defined in

dist/generated/types.d.ts:99291
