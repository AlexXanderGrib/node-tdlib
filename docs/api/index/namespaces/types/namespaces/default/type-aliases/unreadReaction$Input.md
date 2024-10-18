[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / unreadReaction$Input

# Type Alias: unreadReaction$Input

> **unreadReaction$Input**: `object`

Version of [unreadReaction](unreadReaction.md) for method parameters.

Contains information about an unread reaction to a message

## Type declaration

### \_

> `readonly` **\_**: `"unreadReaction"`

### is\_big?

> `readonly` `optional` **is\_big**: [`Bool$Input`](Bool$Input.md)

True, if the reaction was added with a big animation

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender, added the reaction

### type?

> `readonly` `optional` **type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction

## Defined in

dist/generated/types.d.ts:13518
