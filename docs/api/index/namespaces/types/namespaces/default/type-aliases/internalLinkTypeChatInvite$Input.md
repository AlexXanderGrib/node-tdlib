[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeChatInvite$Input

# Type Alias: internalLinkTypeChatInvite$Input

> **internalLinkTypeChatInvite$Input**: `object`

Version of [internalLinkTypeChatInvite](internalLinkTypeChatInvite.md) for method parameters.

The link is a chat invite link. Call checkChatInviteLink with the given invite link to process the link.

- If the link is valid and the user wants to join the chat, then call joinChatByInviteLink

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeChatInvite"`

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

Internal representation of the invite link

## Defined in

dist/generated/types.d.ts:47754
