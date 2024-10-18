[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChats$Input

# Type Alias: searchChats$Input

> **searchChats$Input**: `object`

Searches for the specified query in the title and username of already known chats; this is an offline request. Returns chats in the order seen in the main chat list

## Type declaration

### \_

> `readonly` **\_**: `"searchChats"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of chats to be returned

### query?

> `readonly` `optional` **query**: `string`

Query to search for. If the query is empty, returns up to 50 recently found chats

## Defined in

dist/generated/types.d.ts:77162
