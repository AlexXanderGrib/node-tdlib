[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchCallMessages$DirectInput

# Type Alias: searchCallMessages$DirectInput

> **searchCallMessages$DirectInput**: `object`

Searches for call messages. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

## Type declaration

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### only\_missed?

> `readonly` `optional` **only\_missed**: [`Bool$Input`](Bool$Input.md)

Pass true to search only for messages with missed/declined calls

## Defined in

dist/generated/types.d.ts:78726
