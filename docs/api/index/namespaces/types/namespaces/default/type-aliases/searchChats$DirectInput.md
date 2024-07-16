[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChats$DirectInput

# Type Alias: searchChats$DirectInput

> **searchChats$DirectInput**: `object`

Searches for the specified query in the title and username of already known chats; this is an offline request. Returns chats in the order seen in the main chat list

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of chats to be returned

### query?

> `readonly` `optional` **query**: `string`

Query to search for. If the query is empty, returns up to 50 recently found chats

## Defined in

dist/generated/types.d.ts:75152
