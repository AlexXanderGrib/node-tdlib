[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setStoryReaction$Input

# Type Alias: setStoryReaction$Input

> **setStoryReaction$Input**: `object`

Changes chosen reaction on a story that has already been sent

## Type declaration

### \_

> `readonly` **\_**: `"setStoryReaction"`

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md) \| `null`

Type of the reaction to set; pass null to remove the reaction. Custom emoji reactions can be used only by Telegram Premium users. Paid reactions can't be set

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

The identifier of the story

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

The identifier of the sender of the story

### update\_recent\_reactions?

> `readonly` `optional` **update\_recent\_reactions**: [`Bool$Input`](Bool$Input.md)

Pass true if the reaction needs to be added to recent reactions

## Defined in

dist/generated/types.d.ts:90267
