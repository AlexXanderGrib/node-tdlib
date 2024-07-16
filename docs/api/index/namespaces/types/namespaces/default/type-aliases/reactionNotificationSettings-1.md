[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reactionNotificationSettings

# Type Alias: reactionNotificationSettings

> **reactionNotificationSettings**: `object`

Contains information about notification settings for reactions

## Type declaration

### \_

> **\_**: `"reactionNotificationSettings"`

### message\_reaction\_source

> **message\_reaction\_source**: [`ReactionNotificationSource`](ReactionNotificationSource.md)

Source of message reactions for which notifications are shown

### show\_preview

> **show\_preview**: [`Bool`](Bool.md)

True, if reaction sender and emoji must be displayed in notifications

### sound\_id

> **sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### story\_reaction\_source

> **story\_reaction\_source**: [`ReactionNotificationSource`](ReactionNotificationSource.md)

Source of story reactions for which notifications are shown

## Defined in

dist/generated/types.d.ts:15181
