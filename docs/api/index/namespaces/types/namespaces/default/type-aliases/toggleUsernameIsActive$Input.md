[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleUsernameIsActive$Input

# Type Alias: toggleUsernameIsActive$Input

> **toggleUsernameIsActive$Input**: `object`

Changes active state for a username of the current user. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

## Type declaration

### \_

> `readonly` **\_**: `"toggleUsernameIsActive"`

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

Pass true to activate the username; pass false to disable it

### username?

> `readonly` `optional` **username**: `string`

The username to change

## Defined in

dist/generated/types.d.ts:94084
