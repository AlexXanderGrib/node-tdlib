[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resetAuthenticationEmailAddress$Input

# Type Alias: resetAuthenticationEmailAddress$Input

> **resetAuthenticationEmailAddress$Input**: `object`

Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending.

- Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true

## Type declaration

### \_

> `readonly` **\_**: `"resetAuthenticationEmailAddress"`

## Defined in

dist/generated/types.d.ts:73495
