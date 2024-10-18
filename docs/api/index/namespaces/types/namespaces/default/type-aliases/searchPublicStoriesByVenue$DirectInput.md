[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchPublicStoriesByVenue$DirectInput

# Type Alias: searchPublicStoriesByVenue$DirectInput

> **searchPublicStoriesByVenue$DirectInput**: `object`

Searches for public stories from the given venue. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### venue\_id?

> `readonly` `optional` **venue\_id**: `string`

Identifier of the venue in the provider database

### venue\_provider?

> `readonly` `optional` **venue\_provider**: `string`

Provider of the venue

## Defined in

dist/generated/types.d.ts:78961
