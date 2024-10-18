[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / supergroupFullInfo

# Type Alias: supergroupFullInfo

> **supergroupFullInfo**: `object`

Contains full information about a supergroup or channel

## Type declaration

### \_

> **\_**: `"supergroupFullInfo"`

### administrator\_count

> **administrator\_count**: [`int32`](int32.md)

Number of privileged users in the supergroup or channel; 0 if unknown

### banned\_count

> **banned\_count**: [`int32`](int32.md)

Number of users banned from chat; 0 if unknown

### bot\_commands

> **bot\_commands**: [`vector`](vector.md)\<[`botCommands`](botCommands.md)\>

List of commands of bots in the group

### can\_enable\_paid\_reaction

> **can\_enable\_paid\_reaction**: [`Bool`](Bool.md)

True, if paid reaction can be enabled in the channel chat; for channels only

### can\_get\_members

> **can\_get\_members**: [`Bool`](Bool.md)

True, if members of the chat can be retrieved via getSupergroupMembers or searchChatMembers

### can\_get\_revenue\_statistics

> **can\_get\_revenue\_statistics**: [`Bool`](Bool.md)

True, if the supergroup or channel revenue statistics are available

### can\_get\_star\_revenue\_statistics

> **can\_get\_star\_revenue\_statistics**: [`Bool`](Bool.md)

True, if the supergroup or channel Telegram Star revenue statistics are available

### can\_get\_statistics

> **can\_get\_statistics**: [`Bool`](Bool.md)

True, if the supergroup or channel statistics are available

### can\_have\_sponsored\_messages

> **can\_have\_sponsored\_messages**: [`Bool`](Bool.md)

True, if the chat can have sponsored messages. The value of this field is only available to the owner of the chat

### can\_hide\_members

> **can\_hide\_members**: [`Bool`](Bool.md)

True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators

### can\_set\_location

> **can\_set\_location**: [`Bool`](Bool.md)

True, if the supergroup location can be changed

### can\_set\_sticker\_set

> **can\_set\_sticker\_set**: [`Bool`](Bool.md)

True, if the supergroup sticker set can be changed

### can\_toggle\_aggressive\_anti\_spam

> **can\_toggle\_aggressive\_anti\_spam**: [`Bool`](Bool.md)

True, if aggressive anti-spam checks can be enabled or disabled in the supergroup

### custom\_emoji\_sticker\_set\_id

> **custom\_emoji\_sticker\_set\_id**: [`int64`](int64.md)

Identifier of the custom emoji sticker set that can be used in the supergroup without Telegram Premium subscription; 0 if none

### description

> **description**: `string`

Contains full information about a supergroup or channel

### has\_aggressive\_anti\_spam\_enabled

> **has\_aggressive\_anti\_spam\_enabled**: [`Bool`](Bool.md)

True, if aggressive anti-spam checks are enabled in the supergroup. The value of this field is only available to chat administrators

### has\_hidden\_members

> **has\_hidden\_members**: [`Bool`](Bool.md)

True, if non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers

### has\_paid\_media\_allowed

> **has\_paid\_media\_allowed**: [`Bool`](Bool.md)

True, if paid media can be sent and forwarded to the channel chat; for channels only

### has\_pinned\_stories

> **has\_pinned\_stories**: [`Bool`](Bool.md)

True, if the supergroup or channel has pinned stories

### invite\_link

> **invite\_link**: [`chatInviteLink`](chatInviteLink.md) \| `null`

Primary invite link for the chat; may be null. For chat administrators with can_invite_users right only

### is\_all\_history\_available

> **is\_all\_history\_available**: [`Bool`](Bool.md)

True, if new chat members will have access to old messages. In public, discussion, of forum groups and all channels, old messages are always available,

- so this option affects only private non-forum supergroups without a linked chat. The value of this field is only available to chat administrators

### linked\_chat\_id

> **linked\_chat\_id**: [`int53`](int53.md)

Chat identifier of a discussion group for the channel, or a channel, for which the supergroup is the designated discussion group; 0 if none or unknown

### location

> **location**: [`chatLocation`](chatLocation.md) \| `null`

Location to which the supergroup is connected; may be null if none

### member\_count

> **member\_count**: [`int32`](int32.md)

Number of members in the supergroup or channel; 0 if unknown

### my\_boost\_count

> **my\_boost\_count**: [`int32`](int32.md)

Number of times the current user boosted the supergroup or channel

### photo

> **photo**: [`chatPhoto`](chatPhoto.md) \| `null`

Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo

### restricted\_count

> **restricted\_count**: [`int32`](int32.md)

Number of restricted users in the supergroup; 0 if unknown

### slow\_mode\_delay

> **slow\_mode\_delay**: [`int32`](int32.md)

Delay between consecutive sent messages for non-administrator supergroup members, in seconds

### slow\_mode\_delay\_expires\_in

> **slow\_mode\_delay\_expires\_in**: [`double`](double.md)

Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo update is not triggered when value of this field changes, but both new and old values are non-zero

### sticker\_set\_id

> **sticker\_set\_id**: [`int64`](int64.md)

Identifier of the supergroup sticker set that must be shown before user sticker sets; 0 if none

### unrestrict\_boost\_count

> **unrestrict\_boost\_count**: [`int32`](int32.md)

Number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; 0 if unspecified

### upgraded\_from\_basic\_group\_id

> **upgraded\_from\_basic\_group\_id**: [`int53`](int53.md)

Identifier of the basic group from which supergroup was upgraded; 0 if none

### upgraded\_from\_max\_message\_id

> **upgraded\_from\_max\_message\_id**: [`int53`](int53.md)

Identifier of the last message in the basic group from which supergroup was upgraded; 0 if none

## Defined in

dist/generated/types.d.ts:12095
