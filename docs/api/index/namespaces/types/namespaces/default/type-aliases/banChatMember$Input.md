[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / banChatMember$Input

# Type Alias: banChatMember$Input

> **banChatMember$Input**: `object`

Bans a member in a chat; requires can_restrict_members administrator right. Members can't be banned in private or secret chats. In supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first

## Type declaration

### \_

> `readonly` **\_**: `"banChatMember"`

### banned\_until\_date?

> `readonly` `optional` **banned\_until\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever. Ignored in basic groups and if a chat is banned

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### member\_id?

> `readonly` `optional` **member\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Member identifier

### revoke\_messages?

> `readonly` `optional` **revoke\_messages**: [`Bool$Input`](Bool$Input.md)

Pass true to delete all messages in the chat for the user that is being removed. Always true for supergroups and channels

## Defined in

dist/generated/types.d.ts:88784
