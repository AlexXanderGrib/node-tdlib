[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / supergroupFullInfo$Input

# Type Alias: supergroupFullInfo$Input

> **supergroupFullInfo$Input**: `object`

Version of [supergroupFullInfo](supergroupFullInfo.md) for method parameters.

Contains full information about a supergroup or channel

## Type declaration

### \_

> `readonly` **\_**: `"supergroupFullInfo"`

### administrator\_count?

> `readonly` `optional` **administrator\_count**: [`int32`](int32.md)

Number of privileged users in the supergroup or channel; 0 if unknown

### banned\_count?

> `readonly` `optional` **banned\_count**: [`int32`](int32.md)

Number of users banned from chat; 0 if unknown

### bot\_commands?

> `readonly` `optional` **bot\_commands**: [`vector$Input`](vector$Input.md)\<[`botCommands$Input`](botCommands$Input.md)\>

List of commands of bots in the group

### can\_enable\_paid\_reaction?

> `readonly` `optional` **can\_enable\_paid\_reaction**: [`Bool$Input`](Bool$Input.md)

True, if paid reaction can be enabled in the channel chat; for channels only

### can\_get\_members?

> `readonly` `optional` **can\_get\_members**: [`Bool$Input`](Bool$Input.md)

True, if members of the chat can be retrieved via getSupergroupMembers or searchChatMembers

### can\_get\_revenue\_statistics?

> `readonly` `optional` **can\_get\_revenue\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel revenue statistics are available

### can\_get\_star\_revenue\_statistics?

> `readonly` `optional` **can\_get\_star\_revenue\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel Telegram Star revenue statistics are available

### can\_get\_statistics?

> `readonly` `optional` **can\_get\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel statistics are available

### can\_have\_sponsored\_messages?

> `readonly` `optional` **can\_have\_sponsored\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the chat can have sponsored messages. The value of this field is only available to the owner of the chat

### can\_hide\_members?

> `readonly` `optional` **can\_hide\_members**: [`Bool$Input`](Bool$Input.md)

True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators

### can\_set\_location?

> `readonly` `optional` **can\_set\_location**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup location can be changed

### can\_set\_sticker\_set?

> `readonly` `optional` **can\_set\_sticker\_set**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup sticker set can be changed

### can\_toggle\_aggressive\_anti\_spam?

> `readonly` `optional` **can\_toggle\_aggressive\_anti\_spam**: [`Bool$Input`](Bool$Input.md)

True, if aggressive anti-spam checks can be enabled or disabled in the supergroup

### custom\_emoji\_sticker\_set\_id?

> `readonly` `optional` **custom\_emoji\_sticker\_set\_id**: [`int64$Input`](int64$Input.md)

Identifier of the custom emoji sticker set that can be used in the supergroup without Telegram Premium subscription; 0 if none

### description?

> `readonly` `optional` **description**: `string`

Contains full information about a supergroup or channel

### has\_aggressive\_anti\_spam\_enabled?

> `readonly` `optional` **has\_aggressive\_anti\_spam\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if aggressive anti-spam checks are enabled in the supergroup. The value of this field is only available to chat administrators

### has\_hidden\_members?

> `readonly` `optional` **has\_hidden\_members**: [`Bool$Input`](Bool$Input.md)

True, if non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers

### has\_paid\_media\_allowed?

> `readonly` `optional` **has\_paid\_media\_allowed**: [`Bool$Input`](Bool$Input.md)

True, if paid media can be sent and forwarded to the channel chat; for channels only

### has\_pinned\_stories?

> `readonly` `optional` **has\_pinned\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel has pinned stories

### invite\_link?

> `readonly` `optional` **invite\_link**: [`chatInviteLink$Input`](chatInviteLink$Input.md) \| `null`

Primary invite link for the chat; may be null. For chat administrators with can_invite_users right only

### is\_all\_history\_available?

> `readonly` `optional` **is\_all\_history\_available**: [`Bool$Input`](Bool$Input.md)

True, if new chat members will have access to old messages. In public, discussion, of forum groups and all channels, old messages are always available,

- so this option affects only private non-forum supergroups without a linked chat. The value of this field is only available to chat administrators

### linked\_chat\_id?

> `readonly` `optional` **linked\_chat\_id**: [`int53`](int53.md)

Chat identifier of a discussion group for the channel, or a channel, for which the supergroup is the designated discussion group; 0 if none or unknown

### location?

> `readonly` `optional` **location**: [`chatLocation$Input`](chatLocation$Input.md) \| `null`

Location to which the supergroup is connected; may be null if none

### member\_count?

> `readonly` `optional` **member\_count**: [`int32`](int32.md)

Number of members in the supergroup or channel; 0 if unknown

### my\_boost\_count?

> `readonly` `optional` **my\_boost\_count**: [`int32`](int32.md)

Number of times the current user boosted the supergroup or channel

### photo?

> `readonly` `optional` **photo**: [`chatPhoto$Input`](chatPhoto$Input.md) \| `null`

Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo

### restricted\_count?

> `readonly` `optional` **restricted\_count**: [`int32`](int32.md)

Number of restricted users in the supergroup; 0 if unknown

### slow\_mode\_delay?

> `readonly` `optional` **slow\_mode\_delay**: [`int32`](int32.md)

Delay between consecutive sent messages for non-administrator supergroup members, in seconds

### slow\_mode\_delay\_expires\_in?

> `readonly` `optional` **slow\_mode\_delay\_expires\_in**: [`double`](double.md)

Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo update is not triggered when value of this field changes, but both new and old values are non-zero

### sticker\_set\_id?

> `readonly` `optional` **sticker\_set\_id**: [`int64$Input`](int64$Input.md)

Identifier of the supergroup sticker set that must be shown before user sticker sets; 0 if none

### unrestrict\_boost\_count?

> `readonly` `optional` **unrestrict\_boost\_count**: [`int32`](int32.md)

Number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; 0 if unspecified

### upgraded\_from\_basic\_group\_id?

> `readonly` `optional` **upgraded\_from\_basic\_group\_id**: [`int53`](int53.md)

Identifier of the basic group from which supergroup was upgraded; 0 if none

### upgraded\_from\_max\_message\_id?

> `readonly` `optional` **upgraded\_from\_max\_message\_id**: [`int53`](int53.md)

Identifier of the last message in the basic group from which supergroup was upgraded; 0 if none

## Defined in

dist/generated/types.d.ts:12270
