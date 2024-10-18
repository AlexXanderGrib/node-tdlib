[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / removeMessageReaction$DirectInput

# Type Alias: removeMessageReaction$DirectInput

> **removeMessageReaction$DirectInput**: `object`

Removes a reaction from a message. A chosen reaction can always be removed

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction to remove. The paid reaction can't be removed

## Defined in

dist/generated/types.d.ts:83400
