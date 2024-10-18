[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addQuickReplyShortcutInlineQueryResultMessage

# Type Alias: addQuickReplyShortcutInlineQueryResultMessage()

> **addQuickReplyShortcutInlineQueryResultMessage**: (`parameters`) => [`QuickReplyMessage`](QuickReplyMessage-1.md)

Adds a message to a quick reply shortcut via inline bot. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

## Parameters

• **parameters**: [`addQuickReplyShortcutInlineQueryResultMessage$Input`](addQuickReplyShortcutInlineQueryResultMessage$Input.md)

[addQuickReplyShortcutInlineQueryResultMessage$Input](addQuickReplyShortcutInlineQueryResultMessage$Input.md)

## Returns

[`QuickReplyMessage`](QuickReplyMessage-1.md)

[QuickReplyMessage](QuickReplyMessage-1.md)

## Defined in

dist/generated/types.d.ts:82500
