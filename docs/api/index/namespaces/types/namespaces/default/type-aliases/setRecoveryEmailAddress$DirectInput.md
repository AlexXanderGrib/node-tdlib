[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setRecoveryEmailAddress$DirectInput

# Type Alias: setRecoveryEmailAddress$DirectInput

> **setRecoveryEmailAddress$DirectInput**: `object`

Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed.

- If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation

## Type declaration

### new\_recovery\_email\_address?

> `readonly` `optional` **new\_recovery\_email\_address**: `string`

New recovery email address

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

## Defined in

dist/generated/types.d.ts:74063
