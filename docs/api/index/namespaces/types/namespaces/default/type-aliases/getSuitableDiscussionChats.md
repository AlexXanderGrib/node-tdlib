[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getSuitableDiscussionChats

# Type Alias: getSuitableDiscussionChats()

> **getSuitableDiscussionChats**: (`parameters`) => [`Chats`](Chats-1.md)

Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned basic group chats must be first upgraded to supergroups before they can be set as a discussion group.

- To set a returned supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable first

## Parameters

• **parameters**: [`getSuitableDiscussionChats$Input`](getSuitableDiscussionChats$Input.md)

[getSuitableDiscussionChats$Input](getSuitableDiscussionChats$Input.md)

## Returns

[`Chats`](Chats-1.md)

[Chats](Chats-1.md)

## Defined in

dist/generated/types.d.ts:77721
