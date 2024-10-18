[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addQuickReplyShortcutMessage$DirectInput

# Type Alias: addQuickReplyShortcutMessage$DirectInput

> **addQuickReplyShortcutMessage$DirectInput**: `object`

Adds a message to a quick reply shortcut. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

## Type declaration

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be added; inputMessagePoll, inputMessageForwarded and inputMessageLocation with live_period aren't supported

### reply\_to\_message\_id?

> `readonly` `optional` **reply\_to\_message\_id**: [`int53`](int53.md)

Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none

### shortcut\_name?

> `readonly` `optional` **shortcut\_name**: `string`

Name of the target shortcut

## Defined in

dist/generated/types.d.ts:82401
