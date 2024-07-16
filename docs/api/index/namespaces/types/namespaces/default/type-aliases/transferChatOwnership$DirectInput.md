[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / transferChatOwnership$DirectInput

# Type Alias: transferChatOwnership$DirectInput

> **transferChatOwnership$DirectInput**: `object`

Changes the owner of a chat; requires owner privileges in the chat. Use the method canTransferOwnership to check whether the ownership can be transferred from the current session. Available only for supergroups and channel chats

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the user to which transfer the ownership. The ownership can't be transferred to a bot or to a deleted user

## Defined in

dist/generated/types.d.ts:86581
