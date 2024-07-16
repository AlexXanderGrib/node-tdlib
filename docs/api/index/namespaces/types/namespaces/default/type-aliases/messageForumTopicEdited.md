[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageForumTopicEdited

# Type Alias: messageForumTopicEdited

> **messageForumTopicEdited**: `object`

A forum topic has been edited

## Type declaration

### \_

> **\_**: `"messageForumTopicEdited"`

### edit\_icon\_custom\_emoji\_id

> **edit\_icon\_custom\_emoji\_id**: [`Bool`](Bool.md)

True, if icon's custom_emoji_id is changed

### icon\_custom\_emoji\_id

> **icon\_custom\_emoji\_id**: [`int64`](int64-1.md)

New unique identifier of the custom emoji shown on the topic icon; 0 if none. Must be ignored if edit_icon_custom_emoji_id is false

### name

> **name**: `string`

If non-empty, the new name of the topic

## Defined in

dist/generated/types.d.ts:27317
