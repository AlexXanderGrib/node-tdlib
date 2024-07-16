[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageReaction

# Type Alias: updateMessageReaction

> **updateMessageReaction**: `object`

User changed its reactions on a message with public reactions; for bots only

## Type declaration

### \_

> **\_**: `"updateMessageReaction"`

### actor\_id

> **actor\_id**: [`MessageSender`](MessageSender.md)

Identifier of the user or chat that changed reactions

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the reactions were changed

### message\_id

> **message\_id**: [`int53`](int53-1.md)

Message identifier

### new\_reaction\_types

> **new\_reaction\_types**: [`vector`](vector.md)\<[`ReactionType`](ReactionType.md)\>

New list of chosen reactions

### old\_reaction\_types

> **old\_reaction\_types**: [`vector`](vector.md)\<[`ReactionType`](ReactionType.md)\>

Old list of chosen reactions

## Defined in

dist/generated/types.d.ts:58053
