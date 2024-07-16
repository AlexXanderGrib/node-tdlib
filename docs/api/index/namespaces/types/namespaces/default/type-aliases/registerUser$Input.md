[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / registerUser$Input

# Type Alias: registerUser$Input

> **registerUser$Input**: `object`

Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration

## Type declaration

### \_

> `readonly` **\_**: `"registerUser"`

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification about the current user joining Telegram for other users that added them to contact list

### first\_name?

> `readonly` `optional` **first\_name**: `string`

The first name of the user; 1-64 characters

### last\_name?

> `readonly` `optional` **last\_name**: `string`

The last name of the user; 0-64 characters

## Defined in

dist/generated/types.d.ts:73445
