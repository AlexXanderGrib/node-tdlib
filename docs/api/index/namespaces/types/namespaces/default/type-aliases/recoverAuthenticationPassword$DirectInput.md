[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / recoverAuthenticationPassword$DirectInput

# Type Alias: recoverAuthenticationPassword$DirectInput

> **recoverAuthenticationPassword$DirectInput**: `object`

Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword

## Type declaration

### new\_hint?

> `readonly` `optional` **new\_hint**: `string`

New password hint; may be empty

### new\_password?

> `readonly` `optional` **new\_password**: `string`

New 2-step verification password of the user; may be empty to remove the password

### recovery\_code?

> `readonly` `optional` **recovery\_code**: `string`

Recovery code to check

## Defined in

dist/generated/types.d.ts:73610
