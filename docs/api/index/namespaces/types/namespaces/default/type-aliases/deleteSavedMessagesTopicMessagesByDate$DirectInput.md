[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteSavedMessagesTopicMessagesByDate$DirectInput

# Type Alias: deleteSavedMessagesTopicMessagesByDate$DirectInput

> **deleteSavedMessagesTopicMessagesByDate$DirectInput**: `object`

Deletes all messages between the specified dates in a Saved Messages topic. Messages sent in the last 30 seconds will not be deleted

## Type declaration

### max\_date?

> `readonly` `optional` **max\_date**: [`int32`](int32.md)

The maximum date of the messages to delete

### min\_date?

> `readonly` `optional` **min\_date**: [`int32`](int32.md)

The minimum date of the messages to delete

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of Saved Messages topic which messages will be deleted

## Defined in

dist/generated/types.d.ts:77936
