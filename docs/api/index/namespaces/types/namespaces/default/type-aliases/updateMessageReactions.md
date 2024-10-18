[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageReactions

# Type Alias: updateMessageReactions

> **updateMessageReactions**: `object`

Reactions added to a message with anonymous reactions have changed; for bots only

## Type declaration

### \_

> **\_**: `"updateMessageReactions"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the reactions were changed

### message\_id

> **message\_id**: [`int53`](int53.md)

Message identifier

### reactions

> **reactions**: [`vector`](vector.md)\<[`messageReaction`](messageReaction.md)\>

The list of reactions added to the message

## Defined in

dist/generated/types.d.ts:59767
