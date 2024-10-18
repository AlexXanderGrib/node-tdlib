[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleBotIsAddedToAttachmentMenu$Input

# Type Alias: toggleBotIsAddedToAttachmentMenu$Input

> **toggleBotIsAddedToAttachmentMenu$Input**: `object`

Adds or removes a bot to attachment and side menu. Bot can be added to the menu, only if userTypeBot.can_be_added_to_attachment_menu == true

## Type declaration

### \_

> `readonly` **\_**: `"toggleBotIsAddedToAttachmentMenu"`

### allow\_write\_access?

> `readonly` `optional` **allow\_write\_access**: [`Bool$Input`](Bool$Input.md)

Pass true if the current user allowed the bot to send them messages. Ignored if is_added is false

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Bot's user identifier

### is\_added?

> `readonly` `optional` **is\_added**: [`Bool$Input`](Bool$Input.md)

Pass true to add the bot to attachment menu; pass false to remove the bot from attachment menu

## Defined in

dist/generated/types.d.ts:90965
