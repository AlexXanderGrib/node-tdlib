[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / basicGroupFullInfo

# Type Alias: basicGroupFullInfo

> **basicGroupFullInfo**: `object`

Contains full information about a basic group

## Type declaration

### \_

> **\_**: `"basicGroupFullInfo"`

### bot\_commands

> **bot\_commands**: [`vector`](vector.md)\<[`botCommands`](botCommands.md)\>

List of commands of bots in the group

### can\_hide\_members

> **can\_hide\_members**: [`Bool`](Bool.md)

True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators after upgrading the basic group to a supergroup

### can\_toggle\_aggressive\_anti\_spam

> **can\_toggle\_aggressive\_anti\_spam**: [`Bool`](Bool.md)

True, if aggressive anti-spam checks can be enabled or disabled in the supergroup after upgrading the basic group to a supergroup

### creator\_user\_id

> **creator\_user\_id**: [`int53`](int53.md)

User identifier of the creator of the group; 0 if unknown

### description

> **description**: `string`

Contains full information about a basic group

### invite\_link

> **invite\_link**: [`chatInviteLink`](chatInviteLink.md) \| `null`

Primary invite link for this group; may be null. For chat administrators with can_invite_users right only. Updated only after the basic group is opened

### members

> **members**: [`vector`](vector.md)\<[`chatMember`](chatMember.md)\>

Group members

### photo

> **photo**: [`chatPhoto`](chatPhoto.md) \| `null`

Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo

## Defined in

dist/generated/types.d.ts:11737
