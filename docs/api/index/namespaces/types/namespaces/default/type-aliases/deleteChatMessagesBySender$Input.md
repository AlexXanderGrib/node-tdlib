[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChatMessagesBySender$Input

# Type Alias: deleteChatMessagesBySender$Input

> **deleteChatMessagesBySender$Input**: `object`

Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires can_delete_messages administrator privileges

## Type declaration

### \_

> `readonly` **\_**: `"deleteChatMessagesBySender"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender of messages to delete

## Defined in

dist/generated/types.d.ts:78672
