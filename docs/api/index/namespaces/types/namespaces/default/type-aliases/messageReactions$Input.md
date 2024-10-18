[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReactions$Input

# Type Alias: messageReactions$Input

> **messageReactions$Input**: `object`

Version of [messageReactions](messageReactions.md) for method parameters.

Contains a list of reactions added to a message

## Type declaration

### \_

> `readonly` **\_**: `"messageReactions"`

### are\_tags?

> `readonly` `optional` **are\_tags**: [`Bool$Input`](Bool$Input.md)

True, if the reactions are tags and Telegram Premium users can filter messages by them

### can\_get\_added\_reactions?

> `readonly` `optional` **can\_get\_added\_reactions**: [`Bool$Input`](Bool$Input.md)

True, if the list of added reactions is available using getMessageAddedReactions

### paid\_reactors?

> `readonly` `optional` **paid\_reactors**: [`vector$Input`](vector$Input.md)\<[`paidReactor$Input`](paidReactor$Input.md)\>

Information about top users that added the paid reaction

### reactions?

> `readonly` `optional` **reactions**: [`vector$Input`](vector$Input.md)\<[`messageReaction$Input`](messageReaction$Input.md)\>

List of added reactions

## Defined in

dist/generated/types.d.ts:13415
