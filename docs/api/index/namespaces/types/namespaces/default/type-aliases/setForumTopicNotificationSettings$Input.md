[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setForumTopicNotificationSettings$Input

# Type Alias: setForumTopicNotificationSettings$Input

> **setForumTopicNotificationSettings$Input**: `object`

Changes the notification settings of a forum topic

## Type declaration

### \_

> `readonly` **\_**: `"setForumTopicNotificationSettings"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier of the forum topic

### notification\_settings?

> `readonly` `optional` **notification\_settings**: [`chatNotificationSettings$Input`](chatNotificationSettings$Input.md)

New notification settings for the forum topic. If the topic is muted for more than 366 days, it is considered to be muted forever

## Defined in

dist/generated/types.d.ts:82943
