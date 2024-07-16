[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleStoryIsPostedToChatPage$Input

# Type Alias: toggleStoryIsPostedToChatPage$Input

> **toggleStoryIsPostedToChatPage$Input**: `object`

Toggles whether a story is accessible after expiration. Can be called only if story.can_toggle_is_posted_to_chat_page == true

## Type declaration

### \_

> `readonly` **\_**: `"toggleStoryIsPostedToChatPage"`

### is\_posted\_to\_chat\_page?

> `readonly` `optional` **is\_posted\_to\_chat\_page**: [`Bool$Input`](Bool$Input.md)

Pass true to make the story accessible after expiration; pass false to make it private

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Identifier of the story

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53-1.md)

Identifier of the chat that posted the story

## Defined in

dist/generated/types.d.ts:87431
