[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageForumTopicEdited$Input

# Type Alias: messageForumTopicEdited$Input

> **messageForumTopicEdited$Input**: `object`

Version of [messageForumTopicEdited](messageForumTopicEdited.md) for method parameters.

A forum topic has been edited

## Type declaration

### \_

> `readonly` **\_**: `"messageForumTopicEdited"`

### edit\_icon\_custom\_emoji\_id?

> `readonly` `optional` **edit\_icon\_custom\_emoji\_id**: [`Bool$Input`](Bool$Input.md)

True, if icon's custom_emoji_id is changed

### icon\_custom\_emoji\_id?

> `readonly` `optional` **icon\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

New unique identifier of the custom emoji shown on the topic icon; 0 if none. Must be ignored if edit_icon_custom_emoji_id is false

### name?

> `readonly` `optional` **name**: `string`

If non-empty, the new name of the topic

## Defined in

dist/generated/types.d.ts:28100
