[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addQuickReplyShortcutInlineQueryResultMessage$DirectInput

# Type Alias: addQuickReplyShortcutInlineQueryResultMessage$DirectInput

> **addQuickReplyShortcutInlineQueryResultMessage$DirectInput**: `object`

Adds a message to a quick reply shortcut via inline bot. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

## Type declaration

### hide\_via\_bot?

> `readonly` `optional` **hide\_via\_bot**: [`Bool$Input`](Bool$Input.md)

Pass true to hide the bot, via which the message is sent. Can be used only for bots getOption("animation_search_bot_username"), getOption("photo_search_bot_username"), and getOption("venue_search_bot_username")

### query\_id?

> `readonly` `optional` **query\_id**: [`int64$Input`](int64$Input.md)

Identifier of the inline query

### reply\_to\_message\_id?

> `readonly` `optional` **reply\_to\_message\_id**: [`int53`](int53.md)

Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none

### result\_id?

> `readonly` `optional` **result\_id**: `string`

Identifier of the inline query result

### shortcut\_name?

> `readonly` `optional` **shortcut\_name**: `string`

Name of the target shortcut

## Defined in

dist/generated/types.d.ts:82465
