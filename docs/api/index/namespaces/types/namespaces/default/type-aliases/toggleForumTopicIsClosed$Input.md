[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleForumTopicIsClosed$Input

# Type Alias: toggleForumTopicIsClosed$Input

> **toggleForumTopicIsClosed$Input**: `object`

Toggles whether a topic is closed in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

## Type declaration

### \_

> `readonly` **\_**: `"toggleForumTopicIsClosed"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### is\_closed?

> `readonly` `optional` **is\_closed**: [`Bool$Input`](Bool$Input.md)

Pass true to close the topic; pass false to reopen it

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier of the forum topic

## Defined in

dist/generated/types.d.ts:82991
