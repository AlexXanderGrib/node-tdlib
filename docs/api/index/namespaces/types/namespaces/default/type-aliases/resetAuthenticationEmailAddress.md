[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resetAuthenticationEmailAddress

# Type Alias: resetAuthenticationEmailAddress()

> **resetAuthenticationEmailAddress**: (`parameters`) => [`Ok`](Ok-1.md)

Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending.

- Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true

## Parameters

• **parameters**: [`resetAuthenticationEmailAddress$Input`](resetAuthenticationEmailAddress$Input.md)

[resetAuthenticationEmailAddress$Input](resetAuthenticationEmailAddress$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75500
