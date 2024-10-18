[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createForumTopic$Input

# Type Alias: createForumTopic$Input

> **createForumTopic$Input**: `object`

Creates a topic in a forum supergroup chat; requires can_manage_topics administrator or can_create_topics member right in the supergroup

## Type declaration

### \_

> `readonly` **\_**: `"createForumTopic"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### icon?

> `readonly` `optional` **icon**: [`forumTopicIcon$Input`](forumTopicIcon$Input.md)

Icon of the topic. Icon color must be one of 0x6FB9F0, 0xFFD67E, 0xCB86DB, 0x8EEE98, 0xFF93B2, or 0xFB6F5F. Telegram Premium users can use any custom emoji as topic icon, other users can use only a custom emoji returned by getForumTopicDefaultIcons

### name?

> `readonly` `optional` **name**: `string`

Name of the topic; 1-128 characters

## Defined in

dist/generated/types.d.ts:82673
