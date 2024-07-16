[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addChatMember$Input

# Type Alias: addChatMember$Input

> **addChatMember$Input**: `object`

Adds a new member to a chat; requires can_invite_users member right. Members can't be added to private or secret chats. Returns information about members that weren't added

## Type declaration

### \_

> `readonly` **\_**: `"addChatMember"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### forward\_limit?

> `readonly` `optional` **forward\_limit**: [`int32`](int32-1.md)

The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels, or if the added user is a bot

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the user

## Defined in

dist/generated/types.d.ts:86333
