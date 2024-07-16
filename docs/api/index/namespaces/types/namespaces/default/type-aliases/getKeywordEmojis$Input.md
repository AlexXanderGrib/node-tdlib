[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getKeywordEmojis$Input

# Type Alias: getKeywordEmojis$Input

> **getKeywordEmojis$Input**: `object`

Return emojis matching the keyword. Supported only if the file database is enabled. Order of results is unspecified

## Type declaration

### \_

> `readonly` **\_**: `"getKeywordEmojis"`

### input\_language\_codes?

> `readonly` `optional` **input\_language\_codes**: [`vector$Input`](vector$Input.md)\<`string`\>

List of possible IETF language tags of the user's input language; may be empty if unknown

### text?

> `readonly` `optional` **text**: `string`

Text to search for

## Defined in

dist/generated/types.d.ts:93409
