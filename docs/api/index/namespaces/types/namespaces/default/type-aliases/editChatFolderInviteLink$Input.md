[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editChatFolderInviteLink$Input

# Type Alias: editChatFolderInviteLink$Input

> **editChatFolderInviteLink$Input**: `object`

Edits an invite link for a chat folder

## Type declaration

### \_

> `readonly` **\_**: `"editChatFolderInviteLink"`

### chat\_folder\_id?

> `readonly` `optional` **chat\_folder\_id**: [`int32`](int32-1.md)

Chat folder identifier

### chat\_ids?

> `readonly` `optional` **chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

New identifiers of chats to be accessible by the invite link. Use getChatsForChatFolderInviteLink to get suitable chats. Basic groups will be automatically converted to supergroups before link editing

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Invite link to be edited

### name?

> `readonly` `optional` **name**: `string`

New name of the link; 0-32 characters

## Defined in

dist/generated/types.d.ts:84886
