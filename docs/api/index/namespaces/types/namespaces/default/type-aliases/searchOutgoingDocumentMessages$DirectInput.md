[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchOutgoingDocumentMessages$DirectInput

# Type Alias: searchOutgoingDocumentMessages$DirectInput

> **searchOutgoingDocumentMessages$DirectInput**: `object`

Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the results in reverse chronological order

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages to be returned; up to 100

### query?

> `readonly` `optional` **query**: `string`

Query to search for in document file name and message caption

## Defined in

dist/generated/types.d.ts:78769
