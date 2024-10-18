[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLoginEmailAddress$Input

# Type Alias: setLoginEmailAddress$Input

> **setLoginEmailAddress$Input**: `object`

Changes the login email address of the user. The email address can be changed only if the current user already has login email and passwordState.login_email_address_pattern is non-empty.

- The change will not be applied until the new login email address is confirmed with checkLoginEmailAddressCode. To use Apple ID/Google ID instead of an email address, call checkLoginEmailAddressCode directly

## Type declaration

### \_

> `readonly` **\_**: `"setLoginEmailAddress"`

### new\_login\_email\_address?

> `readonly` `optional` **new\_login\_email\_address**: `string`

New login email address

## Defined in

dist/generated/types.d.ts:75926
