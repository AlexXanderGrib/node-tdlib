[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChat$DirectInput

# Type Alias: deleteChat$DirectInput

> **deleteChat$DirectInput**: `object`

Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release the usernames and remove all members.

- Use the field chat.can_be_deleted_for_all_users to find whether the method can be applied to the chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

## Defined in

dist/generated/types.d.ts:76270
