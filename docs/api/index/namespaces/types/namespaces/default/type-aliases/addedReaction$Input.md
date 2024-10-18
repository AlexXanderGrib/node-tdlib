[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addedReaction$Input

# Type Alias: addedReaction$Input

> **addedReaction$Input**: `object`

Version of [addedReaction](addedReaction.md) for method parameters.

Represents a reaction applied to a message

## Type declaration

### \_

> `readonly` **\_**: `"addedReaction"`

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the reaction was added

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the reaction was added by the current user

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the chat member, applied the reaction

### type?

> `readonly` `optional` **type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction

## Defined in

dist/generated/types.d.ts:37451
