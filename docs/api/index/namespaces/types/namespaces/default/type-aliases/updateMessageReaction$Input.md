[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageReaction$Input

# Type Alias: updateMessageReaction$Input

> **updateMessageReaction$Input**: `object`

Version of [updateMessageReaction](updateMessageReaction.md) for method parameters.

User changed its reactions on a message with public reactions; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageReaction"`

### actor\_id?

> `readonly` `optional` **actor\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the user or chat that changed reactions

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the reactions were changed

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### new\_reaction\_types?

> `readonly` `optional` **new\_reaction\_types**: [`vector$Input`](vector$Input.md)\<[`ReactionType$Input`](ReactionType$Input.md)\>

New list of chosen reactions

### old\_reaction\_types?

> `readonly` `optional` **old\_reaction\_types**: [`vector$Input`](vector$Input.md)\<[`ReactionType$Input`](ReactionType$Input.md)\>

Old list of chosen reactions

## Defined in

dist/generated/types.d.ts:59731
