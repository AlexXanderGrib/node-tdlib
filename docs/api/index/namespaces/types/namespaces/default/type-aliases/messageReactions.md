[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReactions

# Type Alias: messageReactions

> **messageReactions**: `object`

Contains a list of reactions added to a message

## Type declaration

### \_

> **\_**: `"messageReactions"`

### are\_tags

> **are\_tags**: [`Bool`](Bool.md)

True, if the reactions are tags and Telegram Premium users can filter messages by them

### can\_get\_added\_reactions

> **can\_get\_added\_reactions**: [`Bool`](Bool.md)

True, if the list of added reactions is available using getMessageAddedReactions

### paid\_reactors

> **paid\_reactors**: [`vector`](vector.md)\<[`paidReactor`](paidReactor.md)\>

Information about top users that added the paid reaction

### reactions

> **reactions**: [`vector`](vector.md)\<[`messageReaction`](messageReaction.md)\>

List of added reactions

## Defined in

dist/generated/types.d.ts:13387
