[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageAddedReactions$Input

# Type Alias: getMessageAddedReactions$Input

> **getMessageAddedReactions$Input**: `object`

Returns reactions added for a message, along with their sender

## Type declaration

### \_

> `readonly` **\_**: `"getMessageAddedReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message belongs

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of reactions to be returned; must be positive and can't be greater than 100

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message. Use message.interaction_info.reactions.can_get_added_reactions to check whether added reactions can be received for the message

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md) \| `null`

Type of the reactions to return; pass null to return all added reactions; reactionTypePaid isn't supported

## Defined in

dist/generated/types.d.ts:83629
