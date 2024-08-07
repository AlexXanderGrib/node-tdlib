[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / readdQuickReplyShortcutMessages$DirectInput

# Type Alias: readdQuickReplyShortcutMessages$DirectInput

> **readdQuickReplyShortcutMessages$DirectInput**: `object`

Readds quick reply messages which failed to add. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is readded, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be readded, null will be returned instead of the message

## Type declaration

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the quick reply messages to readd. Message identifiers must be in a strictly increasing order

### shortcut\_name?

> `readonly` `optional` **shortcut\_name**: `string`

Name of the target shortcut

## Defined in

dist/generated/types.d.ts:80529
