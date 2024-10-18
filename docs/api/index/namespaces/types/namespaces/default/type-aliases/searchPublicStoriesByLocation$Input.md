[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchPublicStoriesByLocation$Input

# Type Alias: searchPublicStoriesByLocation$Input

> **searchPublicStoriesByLocation$Input**: `object`

Searches for public stories by the given address location. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### \_

> `readonly` **\_**: `"searchPublicStoriesByLocation"`

### address?

> `readonly` `optional` **address**: [`locationAddress$Input`](locationAddress$Input.md)

Address of the location

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

## Defined in

dist/generated/types.d.ts:78887
