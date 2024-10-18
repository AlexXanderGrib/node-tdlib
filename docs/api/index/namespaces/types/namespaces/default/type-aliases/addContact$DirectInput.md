[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addContact$DirectInput

# Type Alias: addContact$DirectInput

> **addContact$DirectInput**: `object`

Adds a user to the contact list or edits an existing contact by their user identifier

## Type declaration

### contact?

> `readonly` `optional` **contact**: [`contact$Input`](contact$Input.md)

The contact to add or edit; phone number may be empty and needs to be specified only if known, vCard is ignored

### share\_phone\_number?

> `readonly` `optional` **share\_phone\_number**: [`Bool$Input`](Bool$Input.md)

Pass true to share the current user's phone number with the new contact. A corresponding rule to userPrivacySettingShowPhoneNumber will be added if needed.

- Use the field userFullInfo.need_phone_number_privacy_exception to check whether the current user needs to be asked to share their phone number

## Defined in

dist/generated/types.d.ts:94568
