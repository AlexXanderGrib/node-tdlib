[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / savedMessagesTag$Input

# Type Alias: savedMessagesTag$Input

> **savedMessagesTag$Input**: `object`

Version of [savedMessagesTag](savedMessagesTag.md) for method parameters.

Represents a tag used in Saved Messages or a Saved Messages topic

## Type declaration

### \_

> `readonly` **\_**: `"savedMessagesTag"`

### count?

> `readonly` `optional` **count**: [`int32`](int32.md)

Number of times the tag was used; may be 0 if the tag has non-empty label

### label?

> `readonly` `optional` **label**: `string`

Label of the tag; 0-12 characters. Always empty if the tag is returned for a Saved Messages topic

### tag?

> `readonly` `optional` **tag**: [`ReactionType$Input`](ReactionType$Input.md)

The tag

## Defined in

dist/generated/types.d.ts:16736
