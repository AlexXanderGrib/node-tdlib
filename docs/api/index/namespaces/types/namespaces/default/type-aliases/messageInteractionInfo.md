[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageInteractionInfo

# Type Alias: messageInteractionInfo

> **messageInteractionInfo**: `object`

Contains information about interactions with a message

## Type declaration

### \_

> **\_**: `"messageInteractionInfo"`

### forward\_count

> **forward\_count**: [`int32`](int32.md)

Number of times the message was forwarded

### reactions

> **reactions**: [`messageReactions`](messageReactions.md) \| `null`

The list of reactions or tags added to the message; may be null

### reply\_info

> **reply\_info**: [`messageReplyInfo`](messageReplyInfo.md) \| `null`

Information about direct or indirect replies to the message; may be null. Currently, available only in channels with a discussion supergroup and discussion supergroups for messages, which are not replies itself

### view\_count

> **view\_count**: [`int32`](int32.md)

Number of times the message was viewed

## Defined in

dist/generated/types.d.ts:13441
