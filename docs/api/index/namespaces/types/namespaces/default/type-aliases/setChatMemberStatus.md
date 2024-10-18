[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatMemberStatus

# Type Alias: setChatMemberStatus()

> **setChatMemberStatus**: (`parameters`) => [`Ok`](Ok-1.md)

Changes the status of a chat member; requires can_invite_users member right to add a chat member, can_promote_members administrator right to change administrator rights of the member,

- and can_restrict_members administrator right to change restrictions of a user. This function is currently not suitable for transferring chat ownership; use transferChatOwnership instead.

- Use addChatMember or banChatMember if some additional parameters needs to be passed

## Parameters

• **parameters**: [`setChatMemberStatus$Input`](setChatMemberStatus$Input.md)

[setChatMemberStatus$Input](setChatMemberStatus$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:88780
