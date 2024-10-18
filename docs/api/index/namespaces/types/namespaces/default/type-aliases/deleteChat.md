[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChat

# Type Alias: deleteChat()

> **deleteChat**: (`parameters`) => [`Ok`](Ok-1.md)

Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release the usernames and remove all members.

- Use the field chat.can_be_deleted_for_all_users to find whether the method can be applied to the chat

## Parameters

• **parameters**: [`deleteChat$Input`](deleteChat$Input.md)

[deleteChat$Input](deleteChat$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:78311
