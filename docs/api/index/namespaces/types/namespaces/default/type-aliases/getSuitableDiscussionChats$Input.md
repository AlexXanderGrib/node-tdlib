[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getSuitableDiscussionChats$Input

# Type Alias: getSuitableDiscussionChats$Input

> **getSuitableDiscussionChats$Input**: `object`

Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned basic group chats must be first upgraded to supergroups before they can be set as a discussion group.

- To set a returned supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable first

## Type declaration

### \_

> `readonly` **\_**: `"getSuitableDiscussionChats"`

## Defined in

dist/generated/types.d.ts:77704
