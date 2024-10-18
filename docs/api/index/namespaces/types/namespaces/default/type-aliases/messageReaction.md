[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReaction

# Type Alias: messageReaction

> **messageReaction**: `object`

Contains information about a reaction to a message

## Type declaration

### \_

> **\_**: `"messageReaction"`

### is\_chosen

> **is\_chosen**: [`Bool`](Bool.md)

True, if the reaction is chosen by the current user

### recent\_sender\_ids

> **recent\_sender\_ids**: [`vector`](vector.md)\<[`MessageSender`](MessageSender.md)\>

Identifiers of at most 3 recent message senders, added the reaction; available in private, basic group and supergroup chats

### total\_count

> **total\_count**: [`int32`](int32.md)

Number of times the reaction was added

### type

> **type**: [`ReactionType`](ReactionType.md)

Type of the reaction

### used\_sender\_id

> **used\_sender\_id**: [`MessageSender`](MessageSender.md) \| `null`

Identifier of the message sender used by the current user to add the reaction; may be null if unknown or the reaction isn't chosen

## Defined in

dist/generated/types.d.ts:13323
