[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupUsernameIsActive

# Type Alias: toggleSupergroupUsernameIsActive()

> **toggleSupergroupUsernameIsActive**: (`parameters`) => [`Ok`](Ok-1.md)

Changes active state for a username of a supergroup or channel, requires owner privileges in the supergroup or channel. The editable username can't be disabled.

- May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

## Parameters

• **parameters**: [`toggleSupergroupUsernameIsActive$Input`](toggleSupergroupUsernameIsActive$Input.md)

[toggleSupergroupUsernameIsActive$Input](toggleSupergroupUsernameIsActive$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:98758
