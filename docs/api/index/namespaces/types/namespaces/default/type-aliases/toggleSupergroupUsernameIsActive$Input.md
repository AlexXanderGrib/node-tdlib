[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupUsernameIsActive$Input

# Type Alias: toggleSupergroupUsernameIsActive$Input

> **toggleSupergroupUsernameIsActive$Input**: `object`

Changes active state for a username of a supergroup or channel, requires owner privileges in the supergroup or channel. The editable username can't be disabled.

- May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

## Type declaration

### \_

> `readonly` **\_**: `"toggleSupergroupUsernameIsActive"`

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

Pass true to activate the username; pass false to disable it

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel

### username?

> `readonly` `optional` **username**: `string`

The username to change

## Defined in

dist/generated/types.d.ts:98710
