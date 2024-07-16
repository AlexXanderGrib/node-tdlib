[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchSecretMessages$DirectInput

# Type Alias: searchSecretMessages$DirectInput

> **searchSecretMessages$DirectInput**: `object`

Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the number of returned messages is chosen by TDLib

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat in which to search. Specify 0 to search in all secret chats

### filter?

> `readonly` `optional` **filter**: [`SearchMessagesFilter$Input`](SearchMessagesFilter$Input.md) \| `null`

Additional filter for messages to search; pass null to search for all messages

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### query?

> `readonly` `optional` **query**: `string`

Query to search for. If empty, searchChatMessages must be used instead

## Defined in

dist/generated/types.d.ts:76548
