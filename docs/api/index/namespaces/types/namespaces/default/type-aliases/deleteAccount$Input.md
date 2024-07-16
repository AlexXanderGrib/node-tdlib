[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteAccount$Input

# Type Alias: deleteAccount$Input

> **deleteAccount$Input**: `object`

Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account.

- Can be called before authorization when the current authorization state is authorizationStateWaitPassword

## Type declaration

### \_

> `readonly` **\_**: `"deleteAccount"`

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user. If the current user isn't authorized, then an empty string can be passed and account deletion can be canceled within one week

### reason?

> `readonly` `optional` **reason**: `string`

The reason why the account was deleted; optional

## Defined in

dist/generated/types.d.ts:98036
