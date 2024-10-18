[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / revokeChatInviteLink

# Type Alias: revokeChatInviteLink()

> **revokeChatInviteLink**: (`parameters`) => [`ChatInviteLinks`](ChatInviteLinks-1.md)

Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.

- If a primary link is revoked, then additionally to the revoked link returns new primary link

## Parameters

• **parameters**: [`revokeChatInviteLink$Input`](revokeChatInviteLink$Input.md)

[revokeChatInviteLink$Input](revokeChatInviteLink$Input.md)

## Returns

[`ChatInviteLinks`](ChatInviteLinks-1.md)

[ChatInviteLinks](ChatInviteLinks-1.md)

## Defined in

dist/generated/types.d.ts:92580
