[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / supergroup

# Type Alias: supergroup

> **supergroup**: `object`

Represents a supergroup or channel with zero or more members (subscribers in the case of channels). From the point of view of the system, a channel is a special kind of a supergroup:

- only administrators can post and see the list of members, and posts from all administrators use the name and photo of the channel instead of individual names and profile photos.

- Unlike supergroups, channels can have an unlimited number of subscribers

## Type declaration

### \_

> **\_**: `"supergroup"`

### boost\_level

> **boost\_level**: [`int32`](int32.md)

Approximate boost level for the chat

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the current user joined, or the point in time when the supergroup or channel was created, in case the user is not a member

### has\_active\_stories

> **has\_active\_stories**: [`Bool`](Bool.md)

True, if the supergroup or channel has non-expired stories available to the current user

### has\_linked\_chat

> **has\_linked\_chat**: [`Bool`](Bool.md)

True, if the channel has a discussion group, or the supergroup is the designated discussion group for a channel

### has\_location

> **has\_location**: [`Bool`](Bool.md)

True, if the supergroup is connected to a location, i.e. the supergroup is a location-based supergroup

### has\_sensitive\_content

> **has\_sensitive\_content**: [`Bool`](Bool.md)

True, if content of media messages in the supergroup or channel chat must be hidden with 18+ spoiler

### has\_unread\_active\_stories

> **has\_unread\_active\_stories**: [`Bool`](Bool.md)

True, if the supergroup or channel has unread non-expired stories available to the current user

### id

> **id**: [`int53`](int53.md)

Supergroup or channel identifier

### is\_broadcast\_group

> **is\_broadcast\_group**: [`Bool`](Bool.md)

True, if the supergroup is a broadcast group, i.e. only administrators can send messages and there is no limit on the number of members

### is\_channel

> **is\_channel**: [`Bool`](Bool.md)

True, if the supergroup is a channel

### is\_fake

> **is\_fake**: [`Bool`](Bool.md)

True, if many users reported this supergroup or channel as a fake account

### is\_forum

> **is\_forum**: [`Bool`](Bool.md)

True, if the supergroup is a forum with topics

### is\_scam

> **is\_scam**: [`Bool`](Bool.md)

True, if many users reported this supergroup or channel as a scam

### is\_slow\_mode\_enabled

> **is\_slow\_mode\_enabled**: [`Bool`](Bool.md)

True, if the slow mode is enabled in the supergroup

### is\_verified

> **is\_verified**: [`Bool`](Bool.md)

True, if the supergroup or channel is verified

### join\_by\_request

> **join\_by\_request**: [`Bool`](Bool.md)

True, if all users directly joining the supergroup need to be approved by supergroup administrators. Always false for channels and supergroups without username, location, or a linked chat

### join\_to\_send\_messages

> **join\_to\_send\_messages**: [`Bool`](Bool.md)

True, if users need to join the supergroup before they can send messages. Always true for channels and non-discussion supergroups

### member\_count

> **member\_count**: [`int32`](int32.md)

Number of members in the supergroup or channel; 0 if unknown. Currently, it is guaranteed to be known only if the supergroup or channel was received through

- getChatSimilarChats, getChatsToSendStories, getCreatedPublicChats, getGroupsInCommon, getInactiveSupergroupChats, getRecommendedChats, getSuitableDiscussionChats,

- getUserPrivacySettingRules, getVideoChatAvailableParticipants, searchChatsNearby, searchPublicChats, or in chatFolderInviteLinkInfo.missing_chat_ids, or in userFullInfo.personal_chat_id,

- or for chats with messages or stories from publicForwards and foundStories

### restriction\_reason

> **restriction\_reason**: `string`

If non-empty, contains a human-readable description of the reason why access to this supergroup or channel must be restricted

### show\_message\_sender

> **show\_message\_sender**: [`Bool`](Bool.md)

True, if messages sent to the channel have information about the sender user. This field is only applicable to channels

### sign\_messages

> **sign\_messages**: [`Bool`](Bool.md)

True, if messages sent to the channel contains name of the sender. This field is only applicable to channels

### status

> **status**: [`ChatMemberStatus`](ChatMemberStatus.md)

Status of the current user in the supergroup or channel; custom title will always be empty

### usernames

> **usernames**: [`usernames`](usernames.md) \| `null`

Usernames of the supergroup or channel; may be null

## Defined in

dist/generated/types.d.ts:11835
