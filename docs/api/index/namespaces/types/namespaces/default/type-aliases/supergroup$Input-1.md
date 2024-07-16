[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / supergroup$Input

# Type Alias: supergroup$Input

> **supergroup$Input**: `object`

Version of [supergroup](supergroup-1.md) for method parameters.

Represents a supergroup or channel with zero or more members (subscribers in the case of channels). From the point of view of the system, a channel is a special kind of a supergroup:

- only administrators can post and see the list of members, and posts from all administrators use the name and photo of the channel instead of individual names and profile photos.

- Unlike supergroups, channels can have an unlimited number of subscribers

## Type declaration

### \_

> `readonly` **\_**: `"supergroup"`

### boost\_level?

> `readonly` `optional` **boost\_level**: [`int32`](int32-1.md)

Approximate boost level for the chat

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the current user joined, or the point in time when the supergroup or channel was created, in case the user is not a member

### has\_active\_stories?

> `readonly` `optional` **has\_active\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel has non-expired stories available to the current user

### has\_linked\_chat?

> `readonly` `optional` **has\_linked\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the channel has a discussion group, or the supergroup is the designated discussion group for a channel

### has\_location?

> `readonly` `optional` **has\_location**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup is connected to a location, i.e. the supergroup is a location-based supergroup

### has\_unread\_active\_stories?

> `readonly` `optional` **has\_unread\_active\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel has unread non-expired stories available to the current user

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Supergroup or channel identifier

### is\_broadcast\_group?

> `readonly` `optional` **is\_broadcast\_group**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup is a broadcast group, i.e. only administrators can send messages and there is no limit on the number of members

### is\_channel?

> `readonly` `optional` **is\_channel**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup is a channel

### is\_fake?

> `readonly` `optional` **is\_fake**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this supergroup or channel as a fake account

### is\_forum?

> `readonly` `optional` **is\_forum**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup is a forum with topics

### is\_scam?

> `readonly` `optional` **is\_scam**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this supergroup or channel as a scam

### is\_slow\_mode\_enabled?

> `readonly` `optional` **is\_slow\_mode\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if the slow mode is enabled in the supergroup

### is\_verified?

> `readonly` `optional` **is\_verified**: [`Bool$Input`](Bool$Input.md)

True, if the supergroup or channel is verified

### join\_by\_request?

> `readonly` `optional` **join\_by\_request**: [`Bool$Input`](Bool$Input.md)

True, if all users directly joining the supergroup need to be approved by supergroup administrators. Always false for channels and supergroups without username, location, or a linked chat

### join\_to\_send\_messages?

> `readonly` `optional` **join\_to\_send\_messages**: [`Bool$Input`](Bool$Input.md)

True, if users need to join the supergroup before they can send messages. Always true for channels and non-discussion supergroups

### member\_count?

> `readonly` `optional` **member\_count**: [`int32`](int32-1.md)

Number of members in the supergroup or channel; 0 if unknown. Currently, it is guaranteed to be known only if the supergroup or channel was received through

- getChatSimilarChats, getChatsToSendStories, getCreatedPublicChats, getGroupsInCommon, getInactiveSupergroupChats, getRecommendedChats, getSuitableDiscussionChats,

- getUserPrivacySettingRules, getVideoChatAvailableParticipants, searchChatsNearby, searchPublicChats, or in chatFolderInviteLinkInfo.missing_chat_ids, or in userFullInfo.personal_chat_id,

- or for chats with messages or stories from publicForwards

### restriction\_reason?

> `readonly` `optional` **restriction\_reason**: `string`

If non-empty, contains a human-readable description of the reason why access to this supergroup or channel must be restricted

### sign\_messages?

> `readonly` `optional` **sign\_messages**: [`Bool$Input`](Bool$Input.md)

True, if messages sent to the channel need to contain information about the sender. This field is only applicable to channels

### status?

> `readonly` `optional` **status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

Status of the current user in the supergroup or channel; custom title will always be empty

### usernames?

> `readonly` `optional` **usernames**: [`usernames$Input`](usernames$Input-1.md) \| `null`

Usernames of the supergroup or channel; may be null

## Defined in

dist/generated/types.d.ts:11384
