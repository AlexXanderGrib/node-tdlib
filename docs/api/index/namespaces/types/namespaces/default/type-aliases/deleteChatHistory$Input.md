[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChatHistory$Input

# Type Alias: deleteChatHistory$Input

> **deleteChatHistory$Input**: `object`

Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to find whether and how the method can be applied to the chat

## Type declaration

### \_

> `readonly` **\_**: `"deleteChatHistory"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### remove\_from\_chat\_list?

> `readonly` `optional` **remove\_from\_chat\_list**: [`Bool$Input`](Bool$Input.md)

Pass true to remove the chat from all chat lists

### revoke?

> `readonly` `optional` **revoke**: [`Bool$Input`](Bool$Input.md)

Pass true to delete chat history for all users

## Defined in

dist/generated/types.d.ts:76207
