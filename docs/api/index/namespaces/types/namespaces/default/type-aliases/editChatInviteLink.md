[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editChatInviteLink

# Type Alias: editChatInviteLink()

> **editChatInviteLink**: (`parameters`) => [`ChatInviteLink`](ChatInviteLink-1.md)

Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels.

- If the link creates a subscription, then expiration_date, member_limit and creates_join_request must not be used

- Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

## Parameters

• **parameters**: [`editChatInviteLink$Input`](editChatInviteLink$Input.md)

[editChatInviteLink$Input](editChatInviteLink$Input.md)

## Returns

[`ChatInviteLink`](ChatInviteLink-1.md)

[ChatInviteLink](ChatInviteLink-1.md)

## Defined in

dist/generated/types.d.ts:92276
