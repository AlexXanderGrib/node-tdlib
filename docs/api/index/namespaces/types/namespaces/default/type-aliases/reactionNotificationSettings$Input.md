[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reactionNotificationSettings$Input

# Type Alias: reactionNotificationSettings$Input

> **reactionNotificationSettings$Input**: `object`

Version of [reactionNotificationSettings](reactionNotificationSettings.md) for method parameters.

Contains information about notification settings for reactions

## Type declaration

### \_

> `readonly` **\_**: `"reactionNotificationSettings"`

### message\_reaction\_source?

> `readonly` `optional` **message\_reaction\_source**: [`ReactionNotificationSource$Input`](ReactionNotificationSource$Input.md)

Source of message reactions for which notifications are shown

### show\_preview?

> `readonly` `optional` **show\_preview**: [`Bool$Input`](Bool$Input.md)

True, if reaction sender and emoji must be displayed in notifications

### sound\_id?

> `readonly` `optional` **sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### story\_reaction\_source?

> `readonly` `optional` **story\_reaction\_source**: [`ReactionNotificationSource$Input`](ReactionNotificationSource$Input.md)

Source of story reactions for which notifications are shown

## Defined in

dist/generated/types.d.ts:15801
