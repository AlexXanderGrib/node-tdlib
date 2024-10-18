[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteForumTopic$DirectInput

# Type Alias: deleteForumTopic$DirectInput

> **deleteForumTopic$DirectInput**: `object`

Deletes all messages in a forum topic; requires can_delete_messages administrator right in the supergroup unless the user is creator of the topic, the topic has no messages from other users and has at most 11 messages

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

Message thread identifier of the forum topic

## Defined in

dist/generated/types.d.ts:83179
