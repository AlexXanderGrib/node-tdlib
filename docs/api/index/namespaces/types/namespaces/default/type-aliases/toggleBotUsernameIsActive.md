[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleBotUsernameIsActive

# Type Alias: toggleBotUsernameIsActive()

> **toggleBotUsernameIsActive**: (`parameters`) => [`Ok`](Ok-1.md)

Changes active state for a username of a bot. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached. Can be called only if userTypeBot.can_be_edited == true

## Parameters

• **parameters**: [`toggleBotUsernameIsActive$Input`](toggleBotUsernameIsActive$Input.md)

[toggleBotUsernameIsActive$Input](toggleBotUsernameIsActive$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:98200
