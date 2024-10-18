[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatMemberStatus$DirectInput

# Type Alias: setChatMemberStatus$DirectInput

> **setChatMemberStatus$DirectInput**: `object`

Changes the status of a chat member; requires can_invite_users member right to add a chat member, can_promote_members administrator right to change administrator rights of the member,

- and can_restrict_members administrator right to change restrictions of a user. This function is currently not suitable for transferring chat ownership; use transferChatOwnership instead.

- Use addChatMember or banChatMember if some additional parameters needs to be passed

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### member\_id?

> `readonly` `optional` **member\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Member identifier. Chats can be only banned and unbanned in supergroups and channels

### status?

> `readonly` `optional` **status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

The new status of the member in the chat

## Defined in

dist/generated/types.d.ts:88753
