[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchOutgoingDocumentMessages$Input

# Type Alias: searchOutgoingDocumentMessages$Input

> **searchOutgoingDocumentMessages$Input**: `object`

Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the results in reverse chronological order

## Type declaration

### \_

> `readonly` **\_**: `"searchOutgoingDocumentMessages"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages to be returned; up to 100

### query?

> `readonly` `optional` **query**: `string`

Query to search for in document file name and message caption

## Defined in

dist/generated/types.d.ts:76727
