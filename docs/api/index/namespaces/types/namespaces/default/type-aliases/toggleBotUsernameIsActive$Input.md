[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleBotUsernameIsActive$Input

# Type Alias: toggleBotUsernameIsActive$Input

> **toggleBotUsernameIsActive$Input**: `object`

Changes active state for a username of a bot. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### \_

> `readonly` **\_**: `"toggleBotUsernameIsActive"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

Pass true to activate the username; pass false to disable it

### username?

> `readonly` `optional` **username**: `string`

The username to change

## Defined in

dist/generated/types.d.ts:95387
