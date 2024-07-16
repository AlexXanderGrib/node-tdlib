[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatNotificationSettingsExceptions$DirectInput

# Type Alias: getChatNotificationSettingsExceptions$DirectInput

> **getChatNotificationSettingsExceptions$DirectInput**: `object`

Returns the list of chats with non-default notification settings for new messages

## Type declaration

### compare\_sound?

> `readonly` `optional` **compare\_sound**: [`Bool$Input`](Bool$Input.md)

Pass true to include in the response chats with only non-default sound

### scope?

> `readonly` `optional` **scope**: [`NotificationSettingsScope$Input`](NotificationSettingsScope$Input.md) \| `null`

If specified, only chats from the scope will be returned; pass null to return chats from all scopes

## Defined in

dist/generated/types.d.ts:86877
