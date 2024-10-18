[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / readdQuickReplyShortcutMessages

# Type Alias: readdQuickReplyShortcutMessages()

> **readdQuickReplyShortcutMessages**: (`parameters`) => [`QuickReplyMessages`](QuickReplyMessages-1.md)

Readds quick reply messages which failed to add. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is readded, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be readded, null will be returned instead of the message

## Parameters

• **parameters**: [`readdQuickReplyShortcutMessages$Input`](readdQuickReplyShortcutMessages$Input.md)

[readdQuickReplyShortcutMessages$Input](readdQuickReplyShortcutMessages$Input.md)

## Returns

[`QuickReplyMessages`](QuickReplyMessages-1.md)

[QuickReplyMessages](QuickReplyMessages-1.md)

## Defined in

dist/generated/types.d.ts:82598
