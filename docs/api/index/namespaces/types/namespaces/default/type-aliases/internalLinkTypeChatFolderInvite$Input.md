[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeChatFolderInvite$Input

# Type Alias: internalLinkTypeChatFolderInvite$Input

> **internalLinkTypeChatFolderInvite$Input**: `object`

Version of [internalLinkTypeChatFolderInvite](internalLinkTypeChatFolderInvite.md) for method parameters.

The link is an invite link to a chat folder. Call checkChatFolderInviteLink with the given invite link to process the link.

- If the link is valid and the user wants to join the chat folder, then call addChatFolderByInviteLink

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeChatFolderInvite"`

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Internal representation of the invite link

## Defined in

dist/generated/types.d.ts:47712
