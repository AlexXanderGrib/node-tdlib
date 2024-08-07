[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createChatFolderInviteLink$Input

# Type Alias: createChatFolderInviteLink$Input

> **createChatFolderInviteLink$Input**: `object`

Creates a new invite link for a chat folder. A link can be created for a chat folder if it has only pinned and included chats

## Type declaration

### \_

> `readonly` **\_**: `"createChatFolderInviteLink"`

### chat\_folder\_id?

> `readonly` `optional` **chat\_folder\_id**: [`int32`](int32-1.md)

Chat folder identifier

### chat\_ids?

> `readonly` `optional` **chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of chats to be accessible by the invite link. Use getChatsForChatFolderInviteLink to get suitable chats. Basic groups will be automatically converted to supergroups before link creation

### name?

> `readonly` `optional` **name**: `string`

Name of the link; 0-32 characters

## Defined in

dist/generated/types.d.ts:84810
