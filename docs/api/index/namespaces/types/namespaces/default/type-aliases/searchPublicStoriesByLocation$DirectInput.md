[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchPublicStoriesByLocation$DirectInput

# Type Alias: searchPublicStoriesByLocation$DirectInput

> **searchPublicStoriesByLocation$DirectInput**: `object`

Searches for public stories by the given address location. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### address?

> `readonly` `optional` **address**: [`locationAddress$Input`](locationAddress$Input-1.md)

Address of the location

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

## Defined in

dist/generated/types.d.ts:76882
