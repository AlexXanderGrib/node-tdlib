[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchStringsByPrefix$Input

# Type Alias: searchStringsByPrefix$Input

> **searchStringsByPrefix$Input**: `object`

Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously

## Type declaration

### \_

> `readonly` **\_**: `"searchStringsByPrefix"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of objects to return

### query?

> `readonly` `optional` **query**: `string`

Query to search for

### return\_none\_for\_empty\_query?

> `readonly` `optional` **return\_none\_for\_empty\_query**: [`Bool$Input`](Bool$Input.md)

Pass true to receive no results for an empty query

### strings?

> `readonly` `optional` **strings**: [`vector$Input`](vector$Input.md)\<`string`\>

The strings to search in for the query

## Defined in

dist/generated/types.d.ts:100986
