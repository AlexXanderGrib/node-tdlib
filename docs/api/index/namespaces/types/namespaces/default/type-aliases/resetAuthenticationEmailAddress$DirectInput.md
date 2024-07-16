[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resetAuthenticationEmailAddress$DirectInput

# Type Alias: resetAuthenticationEmailAddress$DirectInput

> **resetAuthenticationEmailAddress$DirectInput**: `object`

Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending.

- Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true

## Defined in

dist/generated/types.d.ts:73503
