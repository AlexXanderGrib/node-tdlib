[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupHasHiddenMembers$Input

# Type Alias: toggleSupergroupHasHiddenMembers$Input

> **toggleSupergroupHasHiddenMembers$Input**: `object`

Toggles whether non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers. Can be called only if supergroupFullInfo.can_hide_members == true

## Type declaration

### \_

> `readonly` **\_**: `"toggleSupergroupHasHiddenMembers"`

### has\_hidden\_members?

> `readonly` `optional` **has\_hidden\_members**: [`Bool$Input`](Bool$Input.md)

New value of has_hidden_members

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53-1.md)

Identifier of the supergroup

## Defined in

dist/generated/types.d.ts:96363
