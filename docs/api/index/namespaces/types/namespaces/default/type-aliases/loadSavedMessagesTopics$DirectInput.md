[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadSavedMessagesTopics$DirectInput

# Type Alias: loadSavedMessagesTopics$DirectInput

> **loadSavedMessagesTopics$DirectInput**: `object`

Loads more Saved Messages topics. The loaded topics will be sent through updateSavedMessagesTopic. Topics are sorted by their topic.order in descending order. Returns a 404 error if all topics have been loaded

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of topics to be loaded. For optimal performance, the number of loaded topics is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached

## Defined in

dist/generated/types.d.ts:77770
