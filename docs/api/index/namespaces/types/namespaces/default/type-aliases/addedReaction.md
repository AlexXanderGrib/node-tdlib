[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addedReaction

# Type Alias: addedReaction

> **addedReaction**: `object`

Represents a reaction applied to a message

## Type declaration

### \_

> **\_**: `"addedReaction"`

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the reaction was added

### is\_outgoing

> **is\_outgoing**: [`Bool`](Bool.md)

True, if the reaction was added by the current user

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md)

Identifier of the chat member, applied the reaction

### type

> **type**: [`ReactionType`](ReactionType.md)

Type of the reaction

## Defined in

dist/generated/types.d.ts:37423
