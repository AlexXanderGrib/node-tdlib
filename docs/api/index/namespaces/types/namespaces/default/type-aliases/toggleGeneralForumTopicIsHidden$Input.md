[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleGeneralForumTopicIsHidden$Input

# Type Alias: toggleGeneralForumTopicIsHidden$Input

> **toggleGeneralForumTopicIsHidden$Input**: `object`

Toggles whether a General topic is hidden in a forum supergroup chat; requires can_manage_topics right in the supergroup

## Type declaration

### \_

> `readonly` **\_**: `"toggleGeneralForumTopicIsHidden"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### is\_hidden?

> `readonly` `optional` **is\_hidden**: [`Bool$Input`](Bool$Input.md)

Pass true to hide and close the General topic; pass false to unhide it

## Defined in

dist/generated/types.d.ts:83039
