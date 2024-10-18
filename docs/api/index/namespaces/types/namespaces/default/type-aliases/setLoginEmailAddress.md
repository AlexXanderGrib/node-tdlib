[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLoginEmailAddress

# Type Alias: setLoginEmailAddress()

> **setLoginEmailAddress**: (`parameters`) => [`EmailAddressAuthenticationCodeInfo`](EmailAddressAuthenticationCodeInfo-1.md)

Changes the login email address of the user. The email address can be changed only if the current user already has login email and passwordState.login_email_address_pattern is non-empty.

- The change will not be applied until the new login email address is confirmed with checkLoginEmailAddressCode. To use Apple ID/Google ID instead of an email address, call checkLoginEmailAddressCode directly

## Parameters

• **parameters**: [`setLoginEmailAddress$Input`](setLoginEmailAddress$Input.md)

[setLoginEmailAddress$Input](setLoginEmailAddress$Input.md)

## Returns

[`EmailAddressAuthenticationCodeInfo`](EmailAddressAuthenticationCodeInfo-1.md)

[EmailAddressAuthenticationCodeInfo](EmailAddressAuthenticationCodeInfo-1.md)

## Defined in

dist/generated/types.d.ts:75954
