[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setRecoveryEmailAddress

# Type Alias: setRecoveryEmailAddress()

> **setRecoveryEmailAddress**: (`parameters`) => [`PasswordState`](PasswordState-1.md)

Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed.

- If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation

## Parameters

• **parameters**: [`setRecoveryEmailAddress$Input`](setRecoveryEmailAddress$Input.md)

[setRecoveryEmailAddress$Input](setRecoveryEmailAddress$Input.md)

## Returns

[`PasswordState`](PasswordState-1.md)

[PasswordState](PasswordState-1.md)

## Defined in

dist/generated/types.d.ts:76071
