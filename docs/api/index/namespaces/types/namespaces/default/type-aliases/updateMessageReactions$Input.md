[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageReactions$Input

# Type Alias: updateMessageReactions$Input

> **updateMessageReactions$Input**: `object`

Version of [updateMessageReactions](updateMessageReactions.md) for method parameters.

Reactions added to a message with anonymous reactions have changed; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the reactions were changed

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### reactions?

> `readonly` `optional` **reactions**: [`vector$Input`](vector$Input.md)\<[`messageReaction$Input`](messageReaction$Input.md)\>

The list of reactions added to the message

## Defined in

dist/generated/types.d.ts:59795
