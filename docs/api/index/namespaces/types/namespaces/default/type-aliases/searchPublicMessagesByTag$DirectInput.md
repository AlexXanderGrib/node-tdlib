[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchPublicMessagesByTag$DirectInput

# Type Alias: searchPublicMessagesByTag$DirectInput

> **searchPublicMessagesByTag$DirectInput**: `object`

Searches for public channel posts containing the given hashtag or cashtag. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### tag?

> `readonly` `optional` **tag**: `string`

Hashtag or cashtag to search for

## Defined in

dist/generated/types.d.ts:78812
