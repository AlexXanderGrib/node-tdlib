[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / removePendingPaidMessageReactions$Input

# Type Alias: removePendingPaidMessageReactions$Input

> **removePendingPaidMessageReactions$Input**: `object`

Removes all pending paid reactions on a message. Can be called within 5 seconds after the last addPaidMessageReaction call

## Type declaration

### \_

> `readonly` **\_**: `"removePendingPaidMessageReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:83485
