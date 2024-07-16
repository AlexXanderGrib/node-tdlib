[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / shareChatWithBot$Input

# Type Alias: shareChatWithBot$Input

> **shareChatWithBot$Input**: `object`

Shares a chat after pressing a keyboardButtonTypeRequestChat button with the bot

## Type declaration

### \_

> `readonly` **\_**: `"shareChatWithBot"`

### button\_id?

> `readonly` `optional` **button\_id**: [`int32`](int32-1.md)

Identifier of the button

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat with the bot

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message with the button

### only\_check?

> `readonly` `optional` **only\_check**: [`Bool$Input`](Bool$Input.md)

Pass true to check that the chat can be shared by the button instead of actually sharing it. Doesn't check bot_is_member and bot_administrator_rights restrictions.

- If the bot must be a member, then all chats from getGroupsInCommon and all chats, where the user can add the bot, are suitable. In the latter case the bot will be automatically added to the chat.

- If the bot must be an administrator, then all chats, where the bot already has requested rights or can be added to administrators by the user, are suitable. In the latter case the bot will be automatically granted requested rights

### shared\_chat\_id?

> `readonly` `optional` **shared\_chat\_id**: [`int53`](int53-1.md)

Identifier of the shared chat

## Defined in

dist/generated/types.d.ts:82473
