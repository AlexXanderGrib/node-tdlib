[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setMessageReactions$Input

# Type Alias: setMessageReactions$Input

> **setMessageReactions$Input**: `object`

Sets reactions on a message; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setMessageReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message belongs

### is\_big?

> `readonly` `optional` **is\_big**: [`Bool$Input`](Bool$Input.md)

Pass true if the reactions are added with a big animation

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### reaction\_types?

> `readonly` `optional` **reaction\_types**: [`vector$Input`](vector$Input.md)\<[`ReactionType$Input`](ReactionType$Input.md)\>

Types of the reaction to set

## Defined in

dist/generated/types.d.ts:81378
