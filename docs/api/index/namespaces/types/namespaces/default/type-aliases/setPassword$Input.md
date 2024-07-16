[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setPassword$Input

# Type Alias: setPassword$Input

> **setPassword$Input**: `object`

Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed

## Type declaration

### \_

> `readonly` **\_**: `"setPassword"`

### new\_hint?

> `readonly` `optional` **new\_hint**: `string`

New password hint; may be empty

### new\_password?

> `readonly` `optional` **new\_password**: `string`

New 2-step verification password of the user; may be empty to remove the password

### new\_recovery\_email\_address?

> `readonly` `optional` **new\_recovery\_email\_address**: `string`

New recovery email address; may be empty

### old\_password?

> `readonly` `optional` **old\_password**: `string`

Previous 2-step verification password of the user

### set\_recovery\_email\_address?

> `readonly` `optional` **set\_recovery\_email\_address**: [`Bool$Input`](Bool$Input.md)

Pass true to change also the recovery email address

## Defined in

dist/generated/types.d.ts:73868
