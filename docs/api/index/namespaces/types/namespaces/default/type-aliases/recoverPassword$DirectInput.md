[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / recoverPassword$DirectInput

# Type Alias: recoverPassword$DirectInput

> **recoverPassword$DirectInput**: `object`

Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up

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

dist/generated/types.d.ts:76203
