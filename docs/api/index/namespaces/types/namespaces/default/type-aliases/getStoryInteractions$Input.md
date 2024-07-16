[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStoryInteractions$Input

# Type Alias: getStoryInteractions$Input

> **getStoryInteractions$Input**: `object`

Returns interactions with a story. The method can be called only for stories posted on behalf of the current user

## Type declaration

### \_

> `readonly` **\_**: `"getStoryInteractions"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of story interactions to return

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### only\_contacts?

> `readonly` `optional` **only\_contacts**: [`Bool$Input`](Bool$Input.md)

Pass true to get only interactions by contacts; pass false to get all relevant interactions

### prefer\_forwards?

> `readonly` `optional` **prefer\_forwards**: [`Bool$Input`](Bool$Input.md)

Pass true to get forwards and reposts first, then reactions, then other views; pass false to get interactions sorted just by interaction date

### prefer\_with\_reaction?

> `readonly` `optional` **prefer\_with\_reaction**: [`Bool$Input`](Bool$Input.md)

Pass true to get interactions with reaction first; pass false to get interactions sorted just by interaction date. Ignored if prefer_forwards == true

### query?

> `readonly` `optional` **query**: `string`

Query to search for in names, usernames and titles; may be empty to get all relevant interactions

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Story identifier

## Defined in

dist/generated/types.d.ts:87950
