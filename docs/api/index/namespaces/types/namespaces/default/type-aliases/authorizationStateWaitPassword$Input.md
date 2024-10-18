[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateWaitPassword$Input

# Type Alias: authorizationStateWaitPassword$Input

> **authorizationStateWaitPassword$Input**: `object`

Version of [authorizationStateWaitPassword](authorizationStateWaitPassword.md) for method parameters.

The user has been authorized, but needs to enter a 2-step verification password to start using the application.

- Call checkAuthenticationPassword to provide the password, or requestAuthenticationPasswordRecovery to recover the password, or deleteAccount to delete the account after a week

## Type declaration

### \_

> `readonly` **\_**: `"authorizationStateWaitPassword"`

### has\_passport\_data?

> `readonly` `optional` **has\_passport\_data**: [`Bool$Input`](Bool$Input.md)

True, if some Telegram Passport elements were saved

### has\_recovery\_email\_address?

> `readonly` `optional` **has\_recovery\_email\_address**: [`Bool$Input`](Bool$Input.md)

True, if a recovery email address has been set up

### password\_hint?

> `readonly` `optional` **password\_hint**: `string`

Hint for the password; may be empty

### recovery\_email\_address\_pattern?

> `readonly` `optional` **recovery\_email\_address\_pattern**: `string`

Pattern of the email address to which the recovery email was sent; empty until a recovery email has been sent

## Defined in

dist/generated/types.d.ts:3407
