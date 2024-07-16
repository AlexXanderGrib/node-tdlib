[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeStory$Input

# Type Alias: internalLinkTypeStory$Input

> **internalLinkTypeStory$Input**: `object`

Version of [internalLinkTypeStory](internalLinkTypeStory.md) for method parameters.

The link is a link to a story. Call searchPublicChat with the given sender username, then call getStory with the received chat identifier and the given story identifier, then show the story if received

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeStory"`

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32-1.md)

Story identifier

### story\_sender\_username?

> `readonly` `optional` **story\_sender\_username**: `string`

Username of the sender of the story

## Defined in

dist/generated/types.d.ts:48437
