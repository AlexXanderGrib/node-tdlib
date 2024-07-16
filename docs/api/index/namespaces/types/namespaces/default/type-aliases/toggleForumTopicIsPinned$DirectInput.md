[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleForumTopicIsPinned$DirectInput

# Type Alias: toggleForumTopicIsPinned$DirectInput

> **toggleForumTopicIsPinned$DirectInput**: `object`

Changes the pinned state of a forum topic; requires can_manage_topics right in the supergroup. There can be up to getOption("pinned_forum_topic_count_max") pinned forum topics

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the topic; pass false to unpin it

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

Message thread identifier of the forum topic

## Defined in

dist/generated/types.d.ts:81049
