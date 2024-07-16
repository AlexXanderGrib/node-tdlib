[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchQuote$DirectInput

# Type Alias: searchQuote$DirectInput

> **searchQuote$DirectInput**: `object`

Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously

## Type declaration

### quote?

> `readonly` `optional` **quote**: [`formattedText$Input`](formattedText$Input-1.md)

Quote to search for

### quote\_position?

> `readonly` `optional` **quote\_position**: [`int32`](int32-1.md)

Approximate quote position in UTF-16 code units

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Text in which to search for the quote

## Defined in

dist/generated/types.d.ts:81647
