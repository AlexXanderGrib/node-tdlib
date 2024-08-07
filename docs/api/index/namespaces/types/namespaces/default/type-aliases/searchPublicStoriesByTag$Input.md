[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchPublicStoriesByTag$Input

# Type Alias: searchPublicStoriesByTag$Input

> **searchPublicStoriesByTag$Input**: `object`

Searches for public stories containing the given hashtag or cashtag. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### \_

> `readonly` **\_**: `"searchPublicStoriesByTag"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### tag?

> `readonly` `optional` **tag**: `string`

Hashtag or cashtag to search for

## Defined in

dist/generated/types.d.ts:76813
