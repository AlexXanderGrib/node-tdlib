[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / basicGroupFullInfo$Input

# Type Alias: basicGroupFullInfo$Input

> **basicGroupFullInfo$Input**: `object`

Version of [basicGroupFullInfo](basicGroupFullInfo-1.md) for method parameters.

Contains full information about a basic group

## Type declaration

### \_

> `readonly` **\_**: `"basicGroupFullInfo"`

### bot\_commands?

> `readonly` `optional` **bot\_commands**: [`vector$Input`](vector$Input.md)\<[`botCommands$Input`](botCommands$Input-1.md)\>

List of commands of bots in the group

### can\_hide\_members?

> `readonly` `optional` **can\_hide\_members**: [`Bool$Input`](Bool$Input.md)

True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators after upgrading the basic group to a supergroup

### can\_toggle\_aggressive\_anti\_spam?

> `readonly` `optional` **can\_toggle\_aggressive\_anti\_spam**: [`Bool$Input`](Bool$Input.md)

True, if aggressive anti-spam checks can be enabled or disabled in the supergroup after upgrading the basic group to a supergroup

### creator\_user\_id?

> `readonly` `optional` **creator\_user\_id**: [`int53`](int53-1.md)

User identifier of the creator of the group; 0 if unknown

### description?

> `readonly` `optional` **description**: `string`

Contains full information about a basic group

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input-1.md) \| `null`

Primary invite link for this group; may be null. For chat administrators with can_invite_users right only. Updated only after the basic group is opened

### members?

> `readonly` `optional` **members**: [`vector$Input`](vector$Input.md)\<[`chatMember$Input`](chatMember$Input-1.md)\>

Group members

### photo?

> `readonly` `optional` **photo**: [`chatPhoto$Input`](chatPhoto$Input-1.md) \| `null`

Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo

## Defined in

dist/generated/types.d.ts:11211
