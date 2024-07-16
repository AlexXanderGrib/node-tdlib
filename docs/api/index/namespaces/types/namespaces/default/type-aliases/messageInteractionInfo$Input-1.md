[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageInteractionInfo$Input

# Type Alias: messageInteractionInfo$Input

> **messageInteractionInfo$Input**: `object`

Version of [messageInteractionInfo](messageInteractionInfo-1.md) for method parameters.

Contains information about interactions with a message

## Type declaration

### \_

> `readonly` **\_**: `"messageInteractionInfo"`

### forward\_count?

> `readonly` `optional` **forward\_count**: [`int32`](int32-1.md)

Number of times the message was forwarded

### reactions?

> `readonly` `optional` **reactions**: [`messageReactions$Input`](messageReactions$Input-1.md) \| `null`

The list of reactions or tags added to the message; may be null

### reply\_info?

> `readonly` `optional` **reply\_info**: [`messageReplyInfo$Input`](messageReplyInfo$Input-1.md) \| `null`

Information about direct or indirect replies to the message; may be null. Currently, available only in channels with a discussion supergroup and discussion supergroups for messages, which are not replies itself

### view\_count?

> `readonly` `optional` **view\_count**: [`int32`](int32-1.md)

Number of times the message was viewed

## Defined in

dist/generated/types.d.ts:12767
