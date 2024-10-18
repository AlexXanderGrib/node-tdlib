[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editForumTopic$Input

# Type Alias: editForumTopic$Input

> **editForumTopic$Input**: `object`

Edits title and icon of a topic in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

## Type declaration

### \_

> `readonly` **\_**: `"editForumTopic"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### edit\_icon\_custom\_emoji?

> `readonly` `optional` **edit\_icon\_custom\_emoji**: [`Bool$Input`](Bool$Input.md)

Pass true to edit the icon of the topic. Icon of the General topic can't be edited

### icon\_custom\_emoji\_id?

> `readonly` `optional` **icon\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of the new custom emoji for topic icon; pass 0 to remove the custom emoji. Ignored if edit_icon_custom_emoji is false. Telegram Premium users can use any custom emoji, other users can use only a custom emoji returned by getForumTopicDefaultIcons

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier of the forum topic

### name?

> `readonly` `optional` **name**: `string`

New name of the topic; 0-128 characters. If empty, the previous topic name is kept

## Defined in

dist/generated/types.d.ts:82721
