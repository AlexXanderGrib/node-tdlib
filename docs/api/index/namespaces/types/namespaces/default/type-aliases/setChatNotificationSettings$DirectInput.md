[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatNotificationSettings$DirectInput

# Type Alias: setChatNotificationSettings$DirectInput

> **setChatNotificationSettings$DirectInput**: `object`

Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages) can't be changed

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### notification\_settings?

> `readonly` `optional` **notification\_settings**: [`chatNotificationSettings$Input`](chatNotificationSettings$Input.md)

New notification settings for the chat. If the chat is muted for more than 366 days, it is considered to be muted forever

## Defined in

dist/generated/types.d.ts:87970
