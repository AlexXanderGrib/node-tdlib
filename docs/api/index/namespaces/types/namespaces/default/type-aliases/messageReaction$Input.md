[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReaction$Input

# Type Alias: messageReaction$Input

> **messageReaction$Input**: `object`

Version of [messageReaction](messageReaction.md) for method parameters.

Contains information about a reaction to a message

## Type declaration

### \_

> `readonly` **\_**: `"messageReaction"`

### is\_chosen?

> `readonly` `optional` **is\_chosen**: [`Bool$Input`](Bool$Input.md)

True, if the reaction is chosen by the current user

### recent\_sender\_ids?

> `readonly` `optional` **recent\_sender\_ids**: [`vector$Input`](vector$Input.md)\<[`MessageSender$Input`](MessageSender$Input.md)\>

Identifiers of at most 3 recent message senders, added the reaction; available in private, basic group and supergroup chats

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Number of times the reaction was added

### type?

> `readonly` `optional` **type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction

### used\_sender\_id?

> `readonly` `optional` **used\_sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of the message sender used by the current user to add the reaction; may be null if unknown or the reaction isn't chosen

## Defined in

dist/generated/types.d.ts:13356
