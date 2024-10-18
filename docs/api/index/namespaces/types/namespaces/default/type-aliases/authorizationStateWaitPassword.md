[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitPassword

# Type Alias: authorizationStateWaitPassword

> **authorizationStateWaitPassword**: `object`

The user has been authorized, but needs to enter a 2-step verification password to start using the application.

- Call checkAuthenticationPassword to provide the password, or requestAuthenticationPasswordRecovery to recover the password, or deleteAccount to delete the account after a week

## Type declaration

### \_

> **\_**: `"authorizationStateWaitPassword"`

### has\_passport\_data

> **has\_passport\_data**: [`Bool`](Bool.md)

True, if some Telegram Passport elements were saved

### has\_recovery\_email\_address

> **has\_recovery\_email\_address**: [`Bool`](Bool.md)

True, if a recovery email address has been set up

### password\_hint

> **password\_hint**: `string`

Hint for the password; may be empty

### recovery\_email\_address\_pattern

> **recovery\_email\_address\_pattern**: `string`

Pattern of the email address to which the recovery email was sent; empty until a recovery email has been sent

## Defined in

dist/generated/types.d.ts:3377
