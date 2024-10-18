[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventForumTopicPinned$Input

# Type Alias: chatEventForumTopicPinned$Input

> **chatEventForumTopicPinned$Input**: `object`

Version of [chatEventForumTopicPinned](chatEventForumTopicPinned.md) for method parameters.

A pinned forum topic was changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventForumTopicPinned"`

### new\_topic\_info?

> `readonly` `optional` **new\_topic\_info**: [`forumTopicInfo$Input`](forumTopicInfo$Input.md) \| `null`

Information about the new pinned topic; may be null

### old\_topic\_info?

> `readonly` `optional` **old\_topic\_info**: [`forumTopicInfo$Input`](forumTopicInfo$Input.md) \| `null`

Information about the old pinned topic; may be null

## Defined in

dist/generated/types.d.ts:42073
