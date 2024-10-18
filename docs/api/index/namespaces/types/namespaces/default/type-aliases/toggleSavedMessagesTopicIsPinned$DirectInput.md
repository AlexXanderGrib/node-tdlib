[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSavedMessagesTopicIsPinned$DirectInput

# Type Alias: toggleSavedMessagesTopicIsPinned$DirectInput

> **toggleSavedMessagesTopicIsPinned$DirectInput**: `object`

Changes the pinned state of a Saved Messages topic. There can be up to getOption("pinned_saved_messages_topic_count_max") pinned topics. The limit can be increased with Telegram Premium

## Type declaration

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the topic; pass false to unpin it

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of Saved Messages topic to pin or unpin

## Defined in

dist/generated/types.d.ts:77979
