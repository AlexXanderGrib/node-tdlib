[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addChatMembers

# Type Alias: addChatMembers()

> **addChatMembers**: (`parameters`) => [`FailedToAddMembers`](FailedToAddMembers-1.md)

Adds multiple new members to a chat; requires can_invite_users member right. Currently, this method is only available for supergroups and channels.

- This method can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Returns information about members that weren't added

## Parameters

• **parameters**: [`addChatMembers$Input`](addChatMembers$Input.md)

[addChatMembers$Input](addChatMembers$Input.md)

## Returns

[`FailedToAddMembers`](FailedToAddMembers-1.md)

[FailedToAddMembers](FailedToAddMembers-1.md)

## Defined in

dist/generated/types.d.ts:88720
